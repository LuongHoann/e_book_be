import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateDiscountCodeInput } from './dto/create-discount-code.input';
import { UpdateDiscountCodeInput } from './dto/update-discount-code.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { DiscountCodeValidators } from './discount-code.validators';
import { buildResponse } from '@/utils/customResponse';

@Injectable()
export class DiscountCodeService {

  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
    private validator: DiscountCodeValidators,
  ) {}

 async create(createDiscountCodeInput: CreateDiscountCodeInput) {
  try{
      await this.prisma.discount_code.create({ data: createDiscountCodeInput });
      return buildResponse(
        this.i18n,
        'index.discountCode.createSuccess',
        HttpStatus.CREATED,
      );
    } catch (err) {
      return buildResponse(
        this.i18n,
        'index.discountCode.createFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

 async findAll() {
    const data = await this.prisma.discount_code.findMany();
    const isEmpty = data.length === 0;
    const statusCode = isEmpty ? HttpStatus.NOT_FOUND : HttpStatus.OK;
    const messageCode = isEmpty
      ? 'index.general.notFound'
      : 'index.general.success';
    if (isEmpty) {
      return buildResponse(this.i18n, messageCode, statusCode);
    }
    return buildResponse(this.i18n, messageCode, statusCode, {items: data});
  }

 async update(id: number, updateDiscountCodeInput: UpdateDiscountCodeInput) {
    const isDiscontCodeExist = await this.validator.isDiscontCodeExist(id);
    if (!isDiscontCodeExist) {
      return buildResponse(
        this.i18n,
        'index.discountCode.notFound',
        HttpStatus.NOT_FOUND,
      );
    }
    try {
       await this.prisma.discount_code.update({
        data: updateDiscountCodeInput,
        where: { id: id},
      });
      return buildResponse(
        this.i18n,
        'index.discountCode.updateSuccess',
        HttpStatus.OK
      ); 
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.discountCode.updateFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

 async remove(id: number) {
    const isDiscontCodeExist = await this.validator.isDiscontCodeExist(id);

    if (!isDiscontCodeExist) {
      return buildResponse(
        this.i18n,
        'index.discountCode.notFound',
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.prisma.discount_code.delete({ where: {id: id } });
      return buildResponse(this.i18n, 'index.discount_code.deleteSuccess', HttpStatus.OK);
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.discountCode.deleteFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
   }
}
