import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoryUpdateInput } from './category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { categoryWhereUniqueInput } from './category-where-unique.input';

@ArgsType()
export class UpdateOnecategoryArgs {

    @Field(() => categoryUpdateInput, {nullable:false})
    @Type(() => categoryUpdateInput)
    data!: categoryUpdateInput;

    @Field(() => categoryWhereUniqueInput, {nullable:false})
    @Type(() => categoryWhereUniqueInput)
    where!: Prisma.AtLeast<categoryWhereUniqueInput, 'name'>;
}
