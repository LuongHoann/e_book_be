import { PrismaService } from '@/provider/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AreaValidators {
  constructor(private prisma: PrismaService) {}
  //
  async isAreaExist(area_name: string) {
    const result = await this.prisma.area.findUnique({
      where: {area_name: area_name},
    });
    return result 
  }
}
