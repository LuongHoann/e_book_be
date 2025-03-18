import { DeleteShoppingCartInput } from './dto/detele-shopping-cart.input';
import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateShoppingCartInput } from './dto/create-shopping-cart.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class ShoppingCartService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
  ) {}
  async create(createShoppingCartInput: CreateShoppingCartInput) {
    try {
      await this.prisma.shopping_cart.create({ data: createShoppingCartInput });
      return buildResponse(
        this.i18n,
        'index.shoppingCart.createSuccess',
        HttpStatus.CREATED,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.shoppingCart.createdFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(user_id: ShoppingCart['user_id']) {
    try {
      const data = await this.prisma.shopping_cart.findMany({
        where: { user_id: user_id },
      });
      return buildResponse(
        this.i18n,
        'index.general.success',
        HttpStatus.OK,
        {items:data},
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.general.failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(deleteShoppingCartInput: DeleteShoppingCartInput) {
    const { user_id, book_id } = deleteShoppingCartInput;
    try {
      await this.prisma.shopping_cart.delete({
        where: { book_id_user_id: { book_id: book_id, user_id: user_id } },
      });
      return buildResponse(
        this.i18n,
        'index.shoppingCart.deleteSuccess',
        HttpStatus.OK,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.shoppingCart.deleteFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async removeAll(user_id: ShoppingCart['user_id']) {
    try {
      await this.prisma.shopping_cart.deleteMany({
        where: { user_id: user_id },
      });
      return buildResponse(
        this.i18n,
        'index.shoppingCart.deleteSuccess',
        HttpStatus.OK,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.shoppingCart.deleteFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
