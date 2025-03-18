import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { newsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquenewsArgs {

    @Field(() => newsWhereUniqueInput, {nullable:false})
    @Type(() => newsWhereUniqueInput)
    where!: Prisma.AtLeast<newsWhereUniqueInput, 'id'>;
}
