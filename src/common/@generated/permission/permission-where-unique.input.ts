import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionRole_idUrlCompoundUniqueInput } from './permission-role-id-url-compound-unique.input';
import { permissionWhereInput } from './permission-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RoleScalarRelationFilter } from '../prisma/role-scalar-relation-filter.input';

@InputType()
export class permissionWhereUniqueInput {

    @Field(() => permissionRole_idUrlCompoundUniqueInput, {nullable:true})
    role_id_url?: permissionRole_idUrlCompoundUniqueInput;

    @Field(() => [permissionWhereInput], {nullable:true})
    AND?: Array<permissionWhereInput>;

    @Field(() => [permissionWhereInput], {nullable:true})
    OR?: Array<permissionWhereInput>;

    @Field(() => [permissionWhereInput], {nullable:true})
    NOT?: Array<permissionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    role_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => RoleScalarRelationFilter, {nullable:true})
    role?: RoleScalarRelationFilter;
}
