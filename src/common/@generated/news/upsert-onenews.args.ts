import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { newsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { newsCreateInput } from './news-create.input';
import { newsUpdateInput } from './news-update.input';

@ArgsType()
export class UpsertOnenewsArgs {

    @Field(() => newsWhereUniqueInput, {nullable:false})
    @Type(() => newsWhereUniqueInput)
    where!: Prisma.AtLeast<newsWhereUniqueInput, 'id'>;

    @Field(() => newsCreateInput, {nullable:false})
    @Type(() => newsCreateInput)
    create!: newsCreateInput;

    @Field(() => newsUpdateInput, {nullable:false})
    @Type(() => newsUpdateInput)
    update!: newsUpdateInput;
}
