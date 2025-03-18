import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutDiscount_codeInput } from './book-update-without-discount-code.input';

@InputType()
export class bookUpdateWithWhereUniqueWithoutDiscount_codeInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookUpdateWithoutDiscount_codeInput, {nullable:false})
    @Type(() => bookUpdateWithoutDiscount_codeInput)
    data!: bookUpdateWithoutDiscount_codeInput;
}
