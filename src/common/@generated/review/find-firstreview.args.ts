import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { reviewOrderByWithRelationInput } from './review-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { reviewWhereUniqueInput } from './review-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewScalarFieldEnum } from '../prisma/review-scalar-field.enum';

@ArgsType()
export class FindFirstreviewArgs {

    @Field(() => reviewWhereInput, {nullable:true})
    @Type(() => reviewWhereInput)
    where?: reviewWhereInput;

    @Field(() => [reviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<reviewOrderByWithRelationInput>;

    @Field(() => reviewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<reviewWhereUniqueInput, 'user_id_book_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReviewScalarFieldEnum}`>;
}
