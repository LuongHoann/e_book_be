import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionWhereInput } from './permission-where.input';
import { Type } from 'class-transformer';
import { permissionOrderByWithRelationInput } from './permission-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { permissionWhereUniqueInput } from './permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionScalarFieldEnum } from '../prisma/permission-scalar-field.enum';

@ArgsType()
export class FindFirstpermissionOrThrowArgs {

    @Field(() => permissionWhereInput, {nullable:true})
    @Type(() => permissionWhereInput)
    where?: permissionWhereInput;

    @Field(() => [permissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<permissionOrderByWithRelationInput>;

    @Field(() => permissionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<permissionWhereUniqueInput, 'role_id_url'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PermissionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PermissionScalarFieldEnum}`>;
}
