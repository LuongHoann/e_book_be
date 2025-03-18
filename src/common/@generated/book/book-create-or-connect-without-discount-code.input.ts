import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutDiscount_codeInput } from './book-create-without-discount-code.input';

@InputType()
export class bookCreateOrConnectWithoutDiscount_codeInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateWithoutDiscount_codeInput, {nullable:false})
    @Type(() => bookCreateWithoutDiscount_codeInput)
    create!: bookCreateWithoutDiscount_codeInput;
}
