import { Type } from 'class-transformer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
    S3Client,
    PutObjectCommand,
    DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';
import * as fs from 'fs';
import { getSignedUrl } from 'aws-cloudfront-sign';
import { getFileHash } from '@/utils/hashFileName';

@Injectable()
export class DmsService {
    private client: S3Client;
    private bucketName?: string;
    private cloudfrontDomain?: string;
    private keyPairId?: string;
    private privateKey: string;

    constructor(private readonly configService: ConfigService) {
        const s3Region = this.configService.get('S3_REGION');
        this.bucketName = this.configService.get('S3_BUCKET_NAME');
        this.cloudfrontDomain = this.configService.get('CLOUDFRONT_DOMAIN'); 
        this.keyPairId = this.configService.get('CLOUDFRONT_KEY_PAIR_ID');
        // const privateKeyPath = this.configService.get('CLOUDFRONT_PRIVATE_KEY_PATH');

        if (!s3Region || !this.bucketName || !this.cloudfrontDomain || !this.keyPairId  /*|| !privateKeyPath */ ) {
            throw new Error('Missing AWS S3 or CloudFront config');
        }

        this.privateKey = /* fs.readFileSync(privateKeyPath, 'utf8') */ this.configService.get<string>('CLOUDFRONT_PRIVATE_KEY') || "";
        this.client = new S3Client({
            region: s3Region,
            credentials: {
                accessKeyId: this.configService.get('S3_ACCESS_KEY') || '',
                secretAccessKey: this.configService.get('S3_SECRET_ACCESS_KEY') || '',
            },
        });
    }

    async uploadSingleFile({
        file,
        isPublic = false,
        type
    }: {
        file: Express.Multer.File;
        isPublic: boolean;
        type: string
    }) {

        const fileBuffer = file.buffer
        const hashedBuffer = await getFileHash(fileBuffer)
        try {
            const key = `${type}/${hashedBuffer}`;
            const command = new PutObjectCommand({
                Bucket: this.bucketName,
                Key: key,
                Body: file.buffer,
                ContentType: file.mimetype,
                ACL: isPublic ? 'public-read' : 'private',
            });

            let res = await this.client.send(command);
            console.log("res",res)
            return {
                key,
                isPublic,
            };
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    getCloudFrontUrl(key: string , type : fileType) {
        return `${this.cloudfrontDomain}/${type}/${key}`;
    }

    getSignedCloudFrontUrl(key: string, type: any,expiresInSeconds = 60 * 60 * 24) {
        const expires = Math.floor(Date.now() / 1000) + expiresInSeconds;
        if(!this.keyPairId){ 
          throw new InternalServerErrorException()
        }
        return getSignedUrl(`${this.cloudfrontDomain}/${type}/${key}`, {
            keypairId: this.keyPairId,
            privateKeyString: this.privateKey,
            expireTime: expires,
        });
    }

    async deleteFile(key: string) {
        try {
            const command = new DeleteObjectCommand({
                Bucket: this.bucketName,
                Key: key,
            });

            await this.client.send(command);

            return { message: 'File deleted successfully' };
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
