import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { DeleteFavouriteInput } from './dto/delete-favourite.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { buildResponse } from '@/utils/customResponse';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class FavouriteService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
  ) {}
  async create(createFavouriteInput: CreateFavouriteInput) {
      await this.prisma.favourite.create({ data: createFavouriteInput });
      return buildResponse(
        this.i18n,
        'index.favourite.addSuccess',
        HttpStatus.CREATED,
      );
    } catch (err) {
      return buildResponse(
        this.i18n,
        'index.favourite.addFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }


  async findAll() {
    const data = await this.prisma.favourite.findMany();
    const isEmpty = data.length === 0;
    const statusCode = isEmpty ? HttpStatus.NOT_FOUND : HttpStatus.OK;
    const messageCode = isEmpty
      ? 'index.general.notFound'
      : 'index.general.success';

    if (isEmpty) {
      return buildResponse(this.i18n, messageCode, statusCode);
    }
    return buildResponse(this.i18n, messageCode, statusCode, {items:data});
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} favourite`;
  // }

  async remove(deleteFavouriteInput: DeleteFavouriteInput) {
    try {
      await this.prisma.favourite.delete({
        where: {
          book_id_user_id: {
            book_id: deleteFavouriteInput.book_id,
            user_id: deleteFavouriteInput.user_id,
          },
        },
      });
      return buildResponse(this.i18n, 'index.favourite.removeSuccess', 0);
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.favourite.removeFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
