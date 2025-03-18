import { Module } from '@nestjs/common';
import { CategoryBookService } from './category_book.service';
import { CategoryBookResolver } from './category_book.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';

@Module({
  providers: [CategoryBookResolver, CategoryBookService , PrismaService],
})
export class CategoryBookModule {}
