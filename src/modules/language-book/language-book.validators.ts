import { PrismaService } from '@/provider/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LanguageBookValidators {
  constructor(private prisma: PrismaService) {}
  // book is uuid
  async isLanguageBookExist(book_id: string , language_id: number) {
    const result = await this.prisma.language_book.findUnique({
      where: { language_id_book_id: { language_id: language_id , book_id: book_id} },
    });
    return result 
  }
}