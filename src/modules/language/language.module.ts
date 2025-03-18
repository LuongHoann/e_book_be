import { PrismaService } from './../../provider/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageResolver } from './language.resolver';
import { LanguageValidators } from './language.validators';

@Module({
  providers: [LanguageResolver, LanguageService,PrismaService , PrismaService , LanguageValidators ],
})
export class LanguageModule {}
