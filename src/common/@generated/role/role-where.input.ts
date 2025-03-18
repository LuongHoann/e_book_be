import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PermissionListRelationFilter } from '../prisma/permission-list-relation-filter.input';
import { UserListRelationFilter } from '../prisma/user-list-relation-filter.input';

@InputType()
export class roleWhereInput {

    @Field(() => [roleWhereInput], {nullable:true})
    AND?: Array<roleWhereInput>;

    @Field(() => [roleWhereInput], {nullable:true})
    OR?: Array<roleWhereInput>;

    @Field(() => [roleWhereInput], {nullable:true})
    NOT?: Array<roleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    role_name?: StringFilter;

    @Field(() => PermissionListRelationFilter, {nullable:true})
    permission?: PermissionListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    user_user_roleTorole?: UserListRelationFilter;
}
