import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { permission } from '../permission/permission.model';
import { user } from '../user/user.model';
import { RoleCount } from '../prisma/role-count.output';

@ObjectType()
export class role {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    role_name!: string;

    @Field(() => [permission], {nullable:true})
    permission?: Array<permission>;

    @Field(() => [user], {nullable:true})
    user_user_roleTorole?: Array<user>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
