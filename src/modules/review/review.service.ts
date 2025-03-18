import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';
import { DeleteReviewInput } from './dto';

@Injectable()
export class ReviewService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
  ) {}
  async create(createReviewInput: CreateReviewInput) {
    try {
      await this.prisma.review.create({ data: createReviewInput });
      return buildResponse(
        this.i18n,
        'index.review.createSuccess',
        HttpStatus.CREATED,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.review.createdFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(updateReviewInput: UpdateReviewInput) {
    const { user_id, bood_id } = updateReviewInput;
    try {
      await this.prisma.review.update({
        data: updateReviewInput,
        where: { user_id_book_id: { user_id: user_id, book_id: bood_id } },
      });
      return buildResponse(
        this.i18n,
        'index.review.updateSuccess',
        HttpStatus.OK,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.review.updateFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(deleteReviewInput: DeleteReviewInput) {
    const { user_id, book_id } = deleteReviewInput;
    try {
      await this.prisma.review.delete({
        where: { user_id_book_id: { user_id: user_id, book_id: book_id } },
      });
      return buildResponse(this.i18n, 'index.review.deleteSuccess', HttpStatus.OK)
    } catch (error) {
      return buildResponse(this.i18n ,'index.review.deleteFailed',HttpStatus.INTERNAL_SERVER_ERROR )
    }
  }
}
