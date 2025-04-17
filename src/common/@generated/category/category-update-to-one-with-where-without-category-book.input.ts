import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { categoryUpdateWithoutCategory_bookInput } from './category-update-without-category-book.input';

@InputType()
export class categoryUpdateToOneWithWhereWithoutCategory_bookInput {

    @Field(() => categoryWhereInput, {nullable:true})
    @Type(() => categoryWhereInput)
    where?: categoryWhereInput;

    @Field(() => categoryUpdateWithoutCategory_bookInput, {nullable:false})
    @Type(() => categoryUpdateWithoutCategory_bookInput)
    data!: categoryUpdateWithoutCategory_bookInput;
}
