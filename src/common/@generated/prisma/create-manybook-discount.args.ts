import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { book_discountCreateManyInput } from '../book-discount/book-discount-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManybookDiscountArgs {

    @Field(() => [book_discountCreateManyInput], {nullable:false})
    @Type(() => book_discountCreateManyInput)
    data!: Array<book_discountCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
