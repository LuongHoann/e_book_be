import { PrismaService } from '@/provider/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AreaValidators {
  constructor(private prisma: PrismaService) {}
  //
  async isAreaExist(code: string) {
    const result = await this.prisma.area.findUnique({
      where: {code: code},
    });
    return result 
  }
}
