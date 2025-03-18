import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const max_size  = 100*1024
    value.size < max_size
    return 
  }
}
