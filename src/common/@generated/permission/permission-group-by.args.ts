import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionWhereInput } from './permission-where.input';
import { Type } from 'class-transformer';
import { permissionOrderByWithAggregationInput } from './permission-order-by-with-aggregation.input';
import { PermissionScalarFieldEnum } from '../prisma/permission-scalar-field.enum';
import { permissionScalarWhereWithAggregatesInput } from './permission-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class permissionGroupByArgs {

    @Field(() => permissionWhereInput, {nullable:true})
    @Type(() => permissionWhereInput)
    where?: permissionWhereInput;

    @Field(() => [permissionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<permissionOrderByWithAggregationInput>;

    @Field(() => [PermissionScalarFieldEnum], {nullable:false})
    by!: Array<`${PermissionScalarFieldEnum}`>;

    @Field(() => permissionScalarWhereWithAggregatesInput, {nullable:true})
    having?: permissionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
