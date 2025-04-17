import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookCreateWithoutCategoryInput } from './category-book-create-without-category.input';
import { Type } from 'class-transformer';
import { category_bookCreateOrConnectWithoutCategoryInput } from './category-book-create-or-connect-without-category.input';
import { category_bookUpsertWithWhereUniqueWithoutCategoryInput } from './category-book-upsert-with-where-unique-without-category.input';
import { category_bookCreateManyCategoryInputEnvelope } from './category-book-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { category_bookWhereUniqueInput } from './category-book-where-unique.input';
import { category_bookUpdateWithWhereUniqueWithoutCategoryInput } from './category-book-update-with-where-unique-without-category.input';
import { category_bookUpdateManyWithWhereWithoutCategoryInput } from './category-book-update-many-with-where-without-category.input';
import { category_bookScalarWhereInput } from './category-book-scalar-where.input';

@InputType()
export class category_bookUpdateManyWithoutCategoryNestedInput {

    @Field(() => [category_bookCreateWithoutCategoryInput], {nullable:true})
    @Type(() => category_bookCreateWithoutCategoryInput)
    create?: Array<category_bookCreateWithoutCategoryInput>;

    @Field(() => [category_bookCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => category_bookCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<category_bookCreateOrConnectWithoutCategoryInput>;

    @Field(() => [category_bookUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => category_bookUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<category_bookUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => category_bookCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => category_bookCreateManyCategoryInputEnvelope)
    createMany?: category_bookCreateManyCategoryInputEnvelope;

    @Field(() => [category_bookWhereUniqueInput], {nullable:true})
    @Type(() => category_bookWhereUniqueInput)
    set?: Array<Prisma.AtLeast<category_bookWhereUniqueInput, 'category_id_book_id'>>;

    @Field(() => [category_bookWhereUniqueInput], {nullable:true})
    @Type(() => category_bookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<category_bookWhereUniqueInput, 'category_id_book_id'>>;

    @Field(() => [category_bookWhereUniqueInput], {nullable:true})
    @Type(() => category_bookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<category_bookWhereUniqueInput, 'category_id_book_id'>>;

    @Field(() => [category_bookWhereUniqueInput], {nullable:true})
    @Type(() => category_bookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<category_bookWhereUniqueInput, 'category_id_book_id'>>;

    @Field(() => [category_bookUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => category_bookUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<category_bookUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [category_bookUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => category_bookUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<category_bookUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [category_bookScalarWhereInput], {nullable:true})
    @Type(() => category_bookScalarWhereInput)
    deleteMany?: Array<category_bookScalarWhereInput>;
}
