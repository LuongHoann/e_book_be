import {
    Body,
    Controller,
    Delete,
    FileTypeValidator,
    Get,
    HttpCode,
    HttpStatus,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    Post,
    UploadedFile,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DmsService } from './dms.service';
import { Public } from '@/common/decorators/is-public/is-public.decorator';

const MAX_FILE_SIZE = 5*10 * 1024 * 1024; // 50MB
@Controller('dms')
export class DmsController {
    constructor(private readonly dmsService: DmsService) { }

    @Public()
    @Post('/file')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    // new FileTypeValidator({ fileType: 'application/pdf' , 'image/*' }),
                    new MaxFileSizeValidator({
                        maxSize: MAX_FILE_SIZE , 
                        message: 'File is too large. Max file size is 10MB',
                    }),
                ],
                fileIsRequired: true,
            }),
        )
        file: Express.Multer.File,
        @Body('isPublic') isPublic: string,
        @Body('type') type: string
    ) {
        const isPublicBool = isPublic === 'true' ? true : false;
        return this.dmsService.uploadSingleFile({ file, isPublic: isPublicBool , type});
    }

    @Public()
    @Get(':type/:key')
    async getFileUrl(@Param('key') key: string , @Param('type') type: fileType) {
        return this.dmsService.getCloudFrontUrl(key);
    }

    @Get('/signed-url/:key')
    async getSingedUrl(@Param('key') key: string) {
        return this.dmsService.getSignedCloudFrontUrl(key );
    }

    @Delete(':key')
    async deleteFile(@Param('key') key: string) {
        return this.dmsService.deleteFile(key);
    }
}
