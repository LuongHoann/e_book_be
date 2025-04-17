import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { categoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { categoryCreateInput } from './category-create.input';
import { categoryUpdateInput } from './category-update.input';

@ArgsType()
export class UpsertOnecategoryArgs {

    @Field(() => categoryWhereUniqueInput, {nullable:false})
    @Type(() => categoryWhereUniqueInput)
    where!: Prisma.AtLeast<categoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => categoryCreateInput, {nullable:false})
    @Type(() => categoryCreateInput)
    create!: categoryCreateInput;

    @Field(() => categoryUpdateInput, {nullable:false})
    @Type(() => categoryUpdateInput)
    update!: categoryUpdateInput;
}
