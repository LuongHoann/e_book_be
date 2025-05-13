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



  async isLanguageExist(id : string) {
    console.log(id)
    const result = await this.prisma.language.findUnique({
      where: { id: parseInt(id) },
    });
    return result 
  }
}