import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutCategory_bookInput } from './book-create-without-category-book.input';

@InputType()
export class bookCreateOrConnectWithoutCategory_bookInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateWithoutCategory_bookInput, {nullable:false})
    @Type(() => bookCreateWithoutCategory_bookInput)
    create!: bookCreateWithoutCategory_bookInput;
}
