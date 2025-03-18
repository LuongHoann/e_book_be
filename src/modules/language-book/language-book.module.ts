import { Module } from '@nestjs/common';
import { LanguageBookService } from './language-book.service';
import { LanguageBookResolver } from './language-book.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { LanguageBookValidators } from './language-book.validators';

@Module({
  providers: [LanguageBookResolver, LanguageBookService , PrismaService , LanguageBookValidators],
})
export class LanguageBookModule {}
