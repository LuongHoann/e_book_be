import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areaWhereInput } from './area-where.input';
import { Type } from 'class-transformer';
import { areaOrderByWithRelationInput } from './area-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { areaWhereUniqueInput } from './area-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class areaAggregateArgs {

    @Field(() => areaWhereInput, {nullable:true})
    @Type(() => areaWhereInput)
    where?: areaWhereInput;

    @Field(() => [areaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<areaOrderByWithRelationInput>;

    @Field(() => areaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<areaWhereUniqueInput, 'area_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
