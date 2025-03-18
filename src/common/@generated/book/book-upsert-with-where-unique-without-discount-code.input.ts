import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutDiscount_codeInput } from './book-update-without-discount-code.input';
import { bookCreateWithoutDiscount_codeInput } from './book-create-without-discount-code.input';

@InputType()
export class bookUpsertWithWhereUniqueWithoutDiscount_codeInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookUpdateWithoutDiscount_codeInput, {nullable:false})
    @Type(() => bookUpdateWithoutDiscount_codeInput)
    update!: bookUpdateWithoutDiscount_codeInput;

    @Field(() => bookCreateWithoutDiscount_codeInput, {nullable:false})
    @Type(() => bookCreateWithoutDiscount_codeInput)
    create!: bookCreateWithoutDiscount_codeInput;
}
