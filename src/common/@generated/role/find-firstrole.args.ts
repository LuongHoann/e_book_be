import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { roleOrderByWithRelationInput } from './role-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoleScalarFieldEnum } from '../prisma/role-scalar-field.enum';

@ArgsType()
export class FindFirstroleArgs {

    @Field(() => roleWhereInput, {nullable:true})
    @Type(() => roleWhereInput)
    where?: roleWhereInput;

    @Field(() => [roleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<roleOrderByWithRelationInput>;

    @Field(() => roleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<roleWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RoleScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RoleScalarFieldEnum}`>;
}
