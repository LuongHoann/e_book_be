import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
    S3Client,
    PutObjectCommand,
    DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from 'aws-cloudfront-sign';
import { getFileHash } from '@/utils/hashFileName';

@Injectable()
export class DmsService {
    private client: S3Client;
    private bucketName?: string;
    private cloudfrontDomain?: string;
    private keyPairId?: string;
    private privateKey: string;
    private s3AccessKey?: string;
    private s3SercretAccessKey?: string

    constructor(private readonly configService: ConfigService) {
        const s3Region = this.configService.get('S3_REGION');
        this.bucketName = this.configService.get('S3_BUCKET_NAME');
        this.cloudfrontDomain = this.configService.get('CLOUDFRONT_DOMAIN'); 
        this.keyPairId = this.configService.get('CLOUDFRONT_KEY_PAIR_ID');
        // const privateKeyPath = this.configService.get('CLOUDFRONT_PRIVATE_KEY_PATH');
        this.s3AccessKey = this.configService.get('S3_ACCESS_KEY');
        this.s3SercretAccessKey = this.configService.get('S3_SECRET_ACCESS_KEY')

        if (!s3Region || !this.bucketName || !this.cloudfrontDomain || !this.keyPairId  || !this.s3AccessKey/*|| !privateKeyPath */ ) {
            throw new Error('Missing AWS S3 or CloudFront config');
        }

        this.privateKey = /* fs.readFileSync(privateKeyPath, 'utf8') */ this.configService.get<string>('CLOUDFRONT_PRIVATE_KEY') || "";
        this.client = new S3Client({
            region: s3Region,
            credentials: {
                accessKeyId: this.s3AccessKey ,
                secretAccessKey: this.s3SercretAccessKey || "",
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

            await this.client.send(command);
            return {
                key,
                isPublic,
            };
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    getCloudFrontUrl(key: string ) {
        return `${this.cloudfrontDomain}/${key}`;
    }

    getSignedCloudFrontUrl(key: string,expiresInSeconds = 60 * 60 * 24) {
        const expires = Math.floor(Date.now() / 1000) + expiresInSeconds;
        if(!this.keyPairId){ 
          throw new InternalServerErrorException()
        }
        return getSignedUrl(`${this.cloudfrontDomain}/${key}`, {
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
