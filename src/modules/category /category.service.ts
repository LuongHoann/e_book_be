import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';
import { CategoryValidators } from './category.validators';

@Injectable()
export class CategoryService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
    private validator : CategoryValidators
  ) {}
 async create(createCategoryInput: CreateCategoryInput) {
  const isCategoryExist = await this.validator.isCategoryExist(createCategoryInput.name)
  if(isCategoryExist){ 
    return buildResponse(this.i18n, 'index.category.alreadyExists', HttpStatus.CONFLICT)
  }
     try {
        await this.prisma.category.create({data: createCategoryInput})
        return buildResponse(this.i18n , 'index.category.createSuccess' , HttpStatus.CREATED)
     } catch (error) {
        return buildResponse(this.i18n , 'index.category.createFailed' , HttpStatus.INTERNAL_SERVER_ERROR)
     }
  }

 async findAll() {
  try {
      const data = await this.prisma.category.findMany()
     return buildResponse(this.i18n , 'index.general.success' ,HttpStatus.OK , {items: data})
  } catch (error) {
      return buildResponse(this.i18n , 'index.general.failed' , HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

 async remove(name: string) {
    try {
        await this.prisma.category.delete({where: { name: name}})
        return buildResponse(this.i18n , 'index.category.deleteSuccess', HttpStatus.OK)
    } catch (error) {
      return buildResponse(this.i18n , 'index.category.deleteFailed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
