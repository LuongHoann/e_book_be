import { PrismaService } from '@/provider/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookValidators {
 
  constructor(private prisma: PrismaService) {}
  //
  async isISBNExist(isbn: string) /* uuid */ {
    const result = await this.prisma.book.findUnique({
      where: {isbn: isbn},
    });
    return result 
  }

  async isBookExist(id: string) /* uuid */ { 
    const result = await this.prisma.book.findUnique({
      where: {id : id}
    })
    return result 
  }
}
4