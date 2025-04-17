import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { categoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { categoryCreateWithoutCategory_bookInput } from './category-create-without-category-book.input';

@InputType()
export class categoryCreateOrConnectWithoutCategory_bookInput {

    @Field(() => categoryWhereUniqueInput, {nullable:false})
    @Type(() => categoryWhereUniqueInput)
    where!: Prisma.AtLeast<categoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => categoryCreateWithoutCategory_bookInput, {nullable:false})
    @Type(() => categoryCreateWithoutCategory_bookInput)
    create!: categoryCreateWithoutCategory_bookInput;
}
