import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { book_discountUncheckedUpdateManyInput } from '../book-discount/book-discount-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { book_discountWhereInput } from '../book-discount/book-discount-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManybookDiscountArgs {

    @Field(() => book_discountUncheckedUpdateManyInput, {nullable:false})
    @Type(() => book_discountUncheckedUpdateManyInput)
    data!: book_discountUncheckedUpdateManyInput;

    @Field(() => book_discountWhereInput, {nullable:true})
    @Type(() => book_discountWhereInput)
    where?: book_discountWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
