import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoryUpdateWithoutCategory_bookInput } from './category-update-without-category-book.input';
import { Type } from 'class-transformer';
import { categoryCreateWithoutCategory_bookInput } from './category-create-without-category-book.input';
import { categoryWhereInput } from './category-where.input';

@InputType()
export class categoryUpsertWithoutCategory_bookInput {

    @Field(() => categoryUpdateWithoutCategory_bookInput, {nullable:false})
    @Type(() => categoryUpdateWithoutCategory_bookInput)
    update!: categoryUpdateWithoutCategory_bookInput;

    @Field(() => categoryCreateWithoutCategory_bookInput, {nullable:false})
    @Type(() => categoryCreateWithoutCategory_bookInput)
    create!: categoryCreateWithoutCategory_bookInput;

    @Field(() => categoryWhereInput, {nullable:true})
    @Type(() => categoryWhereInput)
    where?: categoryWhereInput;
}
