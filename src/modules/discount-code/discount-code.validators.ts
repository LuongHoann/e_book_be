import { PrismaService } from '@/provider/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscountCodeValidators {
  constructor(private prisma: PrismaService) {}
  //
  async isDiscontCodeExist(key: number) {
    const result = await this.prisma.discount_code.findUnique({
      where: { id: key },
    });
    return result 
  }
}