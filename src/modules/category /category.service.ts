import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';
import { CategoryValidators } from './category.validators';
import { UpdateCategoryInput } from './dto/update-category.input';

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

async findAllWithBookQuantity() {
  try {
     const data = await this.prisma.category.findMany({select: {id: true , name: true , description: true , _count: {select: {category_book: true}}}})
     return buildResponse(this.i18n , 'index.general.success' ,HttpStatus.OK , {items: data})
  } catch (error) {
      return buildResponse(this.i18n , 'index.general.failed' , HttpStatus.INTERNAL_SERVER_ERROR)
  }
}
async update( updateCategoryInput: UpdateCategoryInput) {
  const {id , ...updateCategoryData} = updateCategoryInput
  try {
    await this.prisma.category.update({where: { id: parseInt(updateCategoryInput.id)}, data: updateCategoryData}) 
    return buildResponse(this.i18n , 'index.category.updateSuccess' , HttpStatus.OK)
  } catch (error) {
    return buildResponse(this.i18n , 'index.category.updateFailed' , HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

 async remove(id: string) {
    try {
        await this.prisma.category.delete({where: { id: parseInt(id)}})
        return buildResponse(this.i18n , 'index.category.deleteSuccess', HttpStatus.OK)
    } catch (error) {
      return buildResponse(this.i18n , 'index.category.deleteFailed',HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
