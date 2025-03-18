import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { newsUpdateInput } from './news-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { newsWhereUniqueInput } from './news-where-unique.input';

@ArgsType()
export class UpdateOnenewsArgs {

    @Field(() => newsUpdateInput, {nullable:false})
    @Type(() => newsUpdateInput)
    data!: newsUpdateInput;

    @Field(() => newsWhereUniqueInput, {nullable:false})
    @Type(() => newsWhereUniqueInput)
    where!: Prisma.AtLeast<newsWhereUniqueInput, 'id'>;
}
