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

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
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
                    new FileTypeValidator({ fileType: 'application/pdf' }),
                    new MaxFileSizeValidator({
                        maxSize: MAX_FILE_SIZE , // 10MB
                        message: 'File is too large. Max file size is 10MB',
                    }),
                ],
                fileIsRequired: true,
            }),
        )
        file: Express.Multer.File,
        @Body('isPublic') isPublic: string,
    ) {
        console.log(file)
        const isPublicBool = isPublic === 'true' ? true : false;
        return this.dmsService.uploadSingleFile({ file, isPublic: isPublicBool });
    }

    @Public()
    @Get(':type/:key')
    async getFileUrl(@Param('key') key: string , @Param('type') type: "pdf-books" | "banners") {
        return this.dmsService.getCloudFrontUrl(key , type);
    }

    @Get('/signed-url/:key')
    async getSingedUrl(@Param('key') key: string,  @Param('type') type: "pdf-books" | "banners") {
        return this.dmsService.getSignedCloudFrontUrl(key , type);
    }

    @Delete(':key')
    async deleteFile(@Param('key') key: string) {
        return this.dmsService.deleteFile(key);
    }
}
