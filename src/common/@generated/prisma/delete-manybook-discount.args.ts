import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { book_discountWhereInput } from '../book-discount/book-discount-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManybookDiscountArgs {

    @Field(() => book_discountWhereInput, {nullable:true})
    @Type(() => book_discountWhereInput)
    where?: book_discountWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
