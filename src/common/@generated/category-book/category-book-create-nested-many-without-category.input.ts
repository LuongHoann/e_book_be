import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookCreateWithoutCategoryInput } from './category-book-create-without-category.input';
import { Type } from 'class-transformer';
import { category_bookCreateOrConnectWithoutCategoryInput } from './category-book-create-or-connect-without-category.input';
import { category_bookCreateManyCategoryInputEnvelope } from './category-book-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { category_bookWhereUniqueInput } from './category-book-where-unique.input';

@InputType()
export class category_bookCreateNestedManyWithoutCategoryInput {

    @Field(() => [category_bookCreateWithoutCategoryInput], {nullable:true})
    @Type(() => category_bookCreateWithoutCategoryInput)
    create?: Array<category_bookCreateWithoutCategoryInput>;

    @Field(() => [category_bookCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => category_bookCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<category_bookCreateOrConnectWithoutCategoryInput>;

    @Field(() => category_bookCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => category_bookCreateManyCategoryInputEnvelope)
    createMany?: category_bookCreateManyCategoryInputEnvelope;

    @Field(() => [category_bookWhereUniqueInput], {nullable:true})
    @Type(() => category_bookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<category_bookWhereUniqueInput, 'category_id_book_id'>>;
}
