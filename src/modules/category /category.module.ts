import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { CategoryValidators } from './category.validators';

@Module({
  providers: [CategoryResolver, CategoryService , PrismaService ,CategoryValidators],
})
export class CategoryModule {}
