import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { CommentValidators } from './comment.validators';

@Module({
  providers: [CommentResolver, CommentService , PrismaService , CommentValidators],
})
export class CommentModule {}
