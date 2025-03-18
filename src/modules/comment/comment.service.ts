
import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { DeleteCommentInput } from './dto';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';
import { CommentValidators } from './comment.validators';

@Injectable()
export class CommentService {

  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
    private validator: CommentValidators,
  ) {}

 async create(createCommentInput: CreateCommentInput) {
    try {
      const isCommentExist = await this.validator.isCommentExist(
        createCommentInput
      );
      if (!isCommentExist) {
        return buildResponse(
          this.i18n,
          'index.area.alreadyExists',
          HttpStatus.CONFLICT,
        );
      }
      await this.prisma.comment.create({ data: createCommentInput });
      return buildResponse(
        this.i18n,
        'index.area.createSuccess',
        HttpStatus.CREATED,
      );
    } catch (err) {
      return buildResponse(
        this.i18n,
        'index.area.createFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // async findAll() {
  //   const data = await this.prisma.comment.findMany();
  //   const isEmpty = data.length === 0;
  //   const statusCode = isEmpty ? HttpStatus.NOT_FOUND : HttpStatus.OK;
  //   const messageCode = isEmpty
  //     ? 'index.general.notFound'
  //     : 'index.general.success';

  //   if (isEmpty) {
  //     return buildResponse(this.i18n, messageCode, statusCode);
  //   }
  //   return buildResponse(this.i18n, messageCode, statusCode, data);
  // }

 async update(updateCommentInput: UpdateCommentInput) {
    const isCommentExist = await this.validator.isCommentExist(updateCommentInput);
    if (!isCommentExist) {
      return buildResponse(
        this.i18n,
        'index.area.notFound',
        HttpStatus.NOT_FOUND,
      );
  }
  try {
     await this.prisma.comment.update({
      data: updateCommentInput,
      where: {book_id_user_id: { book_id: updateCommentInput.book_id , user_id: updateCommentInput.user_id }}
    });
    return buildResponse(
      this.i18n,
      'index.area.updateSuccess',
      HttpStatus.OK,
    ); // OK thay vì CREATED
  } catch (error) {
    return buildResponse(
      this.i18n,
      'index.area.updateFailed',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}

 async remove(data: DeleteCommentInput) {
    const isCommentExist = await this.validator.isCommentExist(data);
    if (!isCommentExist) {
      return buildResponse(
        this.i18n,
        'index.area.notFound',
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.prisma.comment.delete({ where: {book_id_user_id: { book_id: data.book_id , user_id: data.user_id}}});
      return buildResponse(this.i18n, 'index.area.deleteSuccess', HttpStatus.OK);
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.area.deleteFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

  }
}
