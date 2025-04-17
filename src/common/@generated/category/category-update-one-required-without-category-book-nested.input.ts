import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoryCreateWithoutCategory_bookInput } from './category-create-without-category-book.input';
import { Type } from 'class-transformer';
import { categoryCreateOrConnectWithoutCategory_bookInput } from './category-create-or-connect-without-category-book.input';
import { categoryUpsertWithoutCategory_bookInput } from './category-upsert-without-category-book.input';
import { Prisma } from '@prisma/client';
import { categoryWhereUniqueInput } from './category-where-unique.input';
import { categoryUpdateToOneWithWhereWithoutCategory_bookInput } from './category-update-to-one-with-where-without-category-book.input';

@InputType()
export class categoryUpdateOneRequiredWithoutCategory_bookNestedInput {

    @Field(() => categoryCreateWithoutCategory_bookInput, {nullable:true})
    @Type(() => categoryCreateWithoutCategory_bookInput)
    create?: categoryCreateWithoutCategory_bookInput;

    @Field(() => categoryCreateOrConnectWithoutCategory_bookInput, {nullable:true})
    @Type(() => categoryCreateOrConnectWithoutCategory_bookInput)
    connectOrCreate?: categoryCreateOrConnectWithoutCategory_bookInput;

    @Field(() => categoryUpsertWithoutCategory_bookInput, {nullable:true})
    @Type(() => categoryUpsertWithoutCategory_bookInput)
    upsert?: categoryUpsertWithoutCategory_bookInput;

    @Field(() => categoryWhereUniqueInput, {nullable:true})
    @Type(() => categoryWhereUniqueInput)
    connect?: Prisma.AtLeast<categoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => categoryUpdateToOneWithWhereWithoutCategory_bookInput, {nullable:true})
    @Type(() => categoryUpdateToOneWithWhereWithoutCategory_bookInput)
    update?: categoryUpdateToOneWithWhereWithoutCategory_bookInput;
}
