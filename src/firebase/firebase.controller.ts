import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Express } from 'express';
import { FireBaseService } from './firebase.service';
import { Public } from '@/common/decorators/is-public/is-public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('firebase')
export class FirebaseController {
    private fireBaseService: FireBaseService

    @Public()
    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    async uploadTestfile(@UploadedFile() file:Express.Multer.File){ 
        console.log(file)
        const data = await this.fireBaseService.uploadPDF(file)
        console.log(data)
        return ;
    }

}
