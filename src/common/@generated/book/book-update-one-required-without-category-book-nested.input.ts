import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutCategory_bookInput } from './book-create-without-category-book.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutCategory_bookInput } from './book-create-or-connect-without-category-book.input';
import { bookUpsertWithoutCategory_bookInput } from './book-upsert-without-category-book.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { bookUpdateToOneWithWhereWithoutCategory_bookInput } from './book-update-to-one-with-where-without-category-book.input';

@InputType()
export class bookUpdateOneRequiredWithoutCategory_bookNestedInput {

    @Field(() => bookCreateWithoutCategory_bookInput, {nullable:true})
    @Type(() => bookCreateWithoutCategory_bookInput)
    create?: bookCreateWithoutCategory_bookInput;

    @Field(() => bookCreateOrConnectWithoutCategory_bookInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutCategory_bookInput)
    connectOrCreate?: bookCreateOrConnectWithoutCategory_bookInput;

    @Field(() => bookUpsertWithoutCategory_bookInput, {nullable:true})
    @Type(() => bookUpsertWithoutCategory_bookInput)
    upsert?: bookUpsertWithoutCategory_bookInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookUpdateToOneWithWhereWithoutCategory_bookInput, {nullable:true})
    @Type(() => bookUpdateToOneWithWhereWithoutCategory_bookInput)
    update?: bookUpdateToOneWithWhereWithoutCategory_bookInput;
}
