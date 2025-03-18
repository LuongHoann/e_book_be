import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { category_bookUncheckedUpdateManyInput } from '../category-book/category-book-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { category_bookWhereInput } from '../category-book/category-book-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManycategoryBookArgs {

    @Field(() => category_bookUncheckedUpdateManyInput, {nullable:false})
    @Type(() => category_bookUncheckedUpdateManyInput)
    data!: category_bookUncheckedUpdateManyInput;

    @Field(() => category_bookWhereInput, {nullable:true})
    @Type(() => category_bookWhereInput)
    where?: category_bookWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
