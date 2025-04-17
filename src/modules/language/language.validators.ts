import { PrismaService } from '@/provider/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LanguageValidators {
  constructor(private prisma: PrismaService) {}
  //
  async isLanguageCodeExist(code : string) {
    const result = await this.prisma.language.findUnique({
      where: { code: code },
    });
    return result 
  }

  async isLanguageExist(id : number) {
    const result = await this.prisma.language.findUnique({
      where: { id: id },
    });
    return result 
  }
}