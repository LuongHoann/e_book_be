import { PrismaService } from '@/provider/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { BookValidators } from './book.validators';
import { DmsService } from '@/aws s3/dms/dms.service';

@Module({
  providers: [BookResolver, BookService , PrismaService , BookValidators , DmsService],
})
export class BookModule {}
