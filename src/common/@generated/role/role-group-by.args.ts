import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { roleOrderByWithAggregationInput } from './role-order-by-with-aggregation.input';
import { RoleScalarFieldEnum } from '../prisma/role-scalar-field.enum';
import { roleScalarWhereWithAggregatesInput } from './role-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class roleGroupByArgs {

    @Field(() => roleWhereInput, {nullable:true})
    @Type(() => roleWhereInput)
    where?: roleWhereInput;

    @Field(() => [roleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<roleOrderByWithAggregationInput>;

    @Field(() => [RoleScalarFieldEnum], {nullable:false})
    by!: Array<`${RoleScalarFieldEnum}`>;

    @Field(() => roleScalarWhereWithAggregatesInput, {nullable:true})
    having?: roleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
