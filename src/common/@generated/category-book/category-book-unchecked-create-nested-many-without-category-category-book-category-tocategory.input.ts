import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookCreateWithoutCategory_category_book_categoryTocategoryInput } from './category-book-create-without-category-category-book-category-tocategory.input';
import { Type } from 'class-transformer';
import { category_bookCreateOrConnectWithoutCategory_category_book_categoryTocategoryInput } from './category-book-create-or-connect-without-category-category-book-category-tocategory.input';
import { category_bookCreateManyCategory_category_book_categoryTocategoryInputEnvelope } from './category-book-create-many-category-category-book-category-tocategory-input-envelope.input';
import { Prisma } from '@prisma/client';
import { category_bookWhereUniqueInput } from './category-book-where-unique.input';

@InputType()
export class category_bookUncheckedCreateNestedManyWithoutCategory_category_book_categoryTocategoryInput {

    @Field(() => [category_bookCreateWithoutCategory_category_book_categoryTocategoryInput], {nullable:true})
    @Type(() => category_bookCreateWithoutCategory_category_book_categoryTocategoryInput)
    create?: Array<category_bookCreateWithoutCategory_category_book_categoryTocategoryInput>;

    @Field(() => [category_bookCreateOrConnectWithoutCategory_category_book_categoryTocategoryInput], {nullable:true})
    @Type(() => category_bookCreateOrConnectWithoutCategory_category_book_categoryTocategoryInput)
    connectOrCreate?: Array<category_bookCreateOrConnectWithoutCategory_category_book_categoryTocategoryInput>;

    @Field(() => category_bookCreateManyCategory_category_book_categoryTocategoryInputEnvelope, {nullable:true})
    @Type(() => category_bookCreateManyCategory_category_book_categoryTocategoryInputEnvelope)
    createMany?: category_bookCreateManyCategory_category_book_categoryTocategoryInputEnvelope;

    @Field(() => [category_bookWhereUniqueInput], {nullable:true})
    @Type(() => category_bookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<category_bookWhereUniqueInput, 'category_book_id'>>;
}
