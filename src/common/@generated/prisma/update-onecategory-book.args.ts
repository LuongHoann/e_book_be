import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { category_bookUpdateInput } from '../category-book/category-book-update.input';
import { Type } from 'class-transformer';
import { category_bookWhereUniqueInput } from '../category-book/category-book-where-unique.input';

@ArgsType()
export class UpdateOnecategoryBookArgs {

    @Field(() => category_bookUpdateInput, {nullable:false})
    @Type(() => category_bookUpdateInput)
    data!: category_bookUpdateInput;

    @Field(() => category_bookWhereUniqueInput, {nullable:false})
    @Type(() => category_bookWhereUniqueInput)
    where!: category_bookWhereUniqueInput;
}
