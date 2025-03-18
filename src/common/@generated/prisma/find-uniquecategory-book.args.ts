import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { category_bookWhereUniqueInput } from '../category-book/category-book-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecategoryBookArgs {

    @Field(() => category_bookWhereUniqueInput, {nullable:false})
    @Type(() => category_bookWhereUniqueInput)
    where!: category_bookWhereUniqueInput;
}
