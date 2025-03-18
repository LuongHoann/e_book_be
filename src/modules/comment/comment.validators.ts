import { PrismaService } from '@/provider/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { DeleteCommentInput } from './dto';

@Injectable()
export class CommentValidators {
  constructor(private prisma: PrismaService) {}
  //
  async isCommentExist(data: DeleteCommentInput) {
    const result = await this.prisma.comment.findUnique({
      where: {
        book_id_user_id: { book_id: data.book_id, user_id: data.user_id },
      },
    });
    return result 
  }
}
