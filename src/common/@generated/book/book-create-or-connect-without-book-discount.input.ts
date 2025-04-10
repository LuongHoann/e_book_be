import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutBook_discountInput } from './book-create-without-book-discount.input';

@InputType()
export class bookCreateOrConnectWithoutBook_discountInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateWithoutBook_discountInput, {nullable:false})
    @Type(() => bookCreateWithoutBook_discountInput)
    create!: bookCreateWithoutBook_discountInput;
}
