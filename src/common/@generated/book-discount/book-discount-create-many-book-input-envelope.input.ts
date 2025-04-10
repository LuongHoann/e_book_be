import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { book_discountCreateManyBookInput } from './book-discount-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class book_discountCreateManyBookInputEnvelope {

    @Field(() => [book_discountCreateManyBookInput], {nullable:false})
    @Type(() => book_discountCreateManyBookInput)
    data!: Array<book_discountCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
