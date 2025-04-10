import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { book_discountCreateManyDiscount_codeInput } from './book-discount-create-many-discount-code.input';
import { Type } from 'class-transformer';

@InputType()
export class book_discountCreateManyDiscount_codeInputEnvelope {

    @Field(() => [book_discountCreateManyDiscount_codeInput], {nullable:false})
    @Type(() => book_discountCreateManyDiscount_codeInput)
    data!: Array<book_discountCreateManyDiscount_codeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
