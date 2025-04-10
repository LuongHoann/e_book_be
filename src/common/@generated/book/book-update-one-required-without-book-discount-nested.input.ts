import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutBook_discountInput } from './book-create-without-book-discount.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutBook_discountInput } from './book-create-or-connect-without-book-discount.input';
import { bookUpsertWithoutBook_discountInput } from './book-upsert-without-book-discount.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { bookUpdateToOneWithWhereWithoutBook_discountInput } from './book-update-to-one-with-where-without-book-discount.input';

@InputType()
export class bookUpdateOneRequiredWithoutBook_discountNestedInput {

    @Field(() => bookCreateWithoutBook_discountInput, {nullable:true})
    @Type(() => bookCreateWithoutBook_discountInput)
    create?: bookCreateWithoutBook_discountInput;

    @Field(() => bookCreateOrConnectWithoutBook_discountInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutBook_discountInput)
    connectOrCreate?: bookCreateOrConnectWithoutBook_discountInput;

    @Field(() => bookUpsertWithoutBook_discountInput, {nullable:true})
    @Type(() => bookUpsertWithoutBook_discountInput)
    upsert?: bookUpsertWithoutBook_discountInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookUpdateToOneWithWhereWithoutBook_discountInput, {nullable:true})
    @Type(() => bookUpdateToOneWithWhereWithoutBook_discountInput)
    update?: bookUpdateToOneWithWhereWithoutBook_discountInput;
}
