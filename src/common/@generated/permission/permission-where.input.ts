import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RoleScalarRelationFilter } from '../prisma/role-scalar-relation-filter.input';

@InputType()
export class permissionWhereInput {

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
