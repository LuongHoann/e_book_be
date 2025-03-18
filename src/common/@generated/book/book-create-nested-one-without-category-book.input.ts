import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutCategory_bookInput } from './book-create-without-category-book.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutCategory_bookInput } from './book-create-or-connect-without-category-book.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class bookCreateNestedOneWithoutCategory_bookInput {

    @Field(() => bookCreateWithoutCategory_bookInput, {nullable:true})
    @Type(() => bookCreateWithoutCategory_bookInput)
    create?: bookCreateWithoutCategory_bookInput;

    @Field(() => bookCreateOrConnectWithoutCategory_bookInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutCategory_bookInput)
    connectOrCreate?: bookCreateOrConnectWithoutCategory_bookInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;
}
