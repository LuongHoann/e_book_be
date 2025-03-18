import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { roleWhereInput } from './role-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PermissionListRelationFilter } from '../prisma/permission-list-relation-filter.input';
import { UserListRelationFilter } from '../prisma/user-list-relation-filter.input';

@InputType()
export class roleWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [roleWhereInput], {nullable:true})
    AND?: Array<roleWhereInput>;

    @Field(() => [roleWhereInput], {nullable:true})
    OR?: Array<roleWhereInput>;

    @Field(() => [roleWhereInput], {nullable:true})
    NOT?: Array<roleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    role_name?: StringFilter;

    @Field(() => PermissionListRelationFilter, {nullable:true})
    permission?: PermissionListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    user_user_roleTorole?: UserListRelationFilter;
}
