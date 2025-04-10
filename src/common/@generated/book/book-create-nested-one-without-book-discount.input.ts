import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutBook_discountInput } from './book-create-without-book-discount.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutBook_discountInput } from './book-create-or-connect-without-book-discount.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class bookCreateNestedOneWithoutBook_discountInput {

    @Field(() => bookCreateWithoutBook_discountInput, {nullable:true})
    @Type(() => bookCreateWithoutBook_discountInput)
    create?: bookCreateWithoutBook_discountInput;

    @Field(() => bookCreateOrConnectWithoutBook_discountInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutBook_discountInput)
    connectOrCreate?: bookCreateOrConnectWithoutBook_discountInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;
}
