import { PrismaService } from '@/provider/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { BookValidators } from './book.validators';

@Module({
  providers: [BookResolver, BookService , PrismaService , BookValidators],
})
export class BookModule {}
