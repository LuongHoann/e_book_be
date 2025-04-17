import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { categoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecategoryArgs {

    @Field(() => categoryWhereUniqueInput, {nullable:false})
    @Type(() => categoryWhereUniqueInput)
    where!: Prisma.AtLeast<categoryWhereUniqueInput, 'id' | 'name'>;
}
