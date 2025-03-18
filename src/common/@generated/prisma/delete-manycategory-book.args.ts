import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { category_bookWhereInput } from '../category-book/category-book-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManycategoryBookArgs {

    @Field(() => category_bookWhereInput, {nullable:true})
    @Type(() => category_bookWhereInput)
    where?: category_bookWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
