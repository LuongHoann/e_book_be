import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateWithoutBook_discountInput } from './book-update-without-book-discount.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutBook_discountInput } from './book-create-without-book-discount.input';
import { bookWhereInput } from './book-where.input';

@InputType()
export class bookUpsertWithoutBook_discountInput {

    @Field(() => bookUpdateWithoutBook_discountInput, {nullable:false})
    @Type(() => bookUpdateWithoutBook_discountInput)
    update!: bookUpdateWithoutBook_discountInput;

    @Field(() => bookCreateWithoutBook_discountInput, {nullable:false})
    @Type(() => bookCreateWithoutBook_discountInput)
    create!: bookCreateWithoutBook_discountInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;
}
