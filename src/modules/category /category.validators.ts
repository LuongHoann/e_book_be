import { PrismaService } from '@/provider/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryValidators {
  constructor(private prisma: PrismaService) {}
  //
  async isCategoryExist(name: string) {
    const result = await this.prisma.category.findUnique({
      where: { name: name },
    });
    return result 
  }
}