import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateManyRole_user_roleToroleInput } from './user-create-many-role-user-role-torole.input';
import { Type } from 'class-transformer';

@InputType()
export class userCreateManyRole_user_roleToroleInputEnvelope {

    @Field(() => [userCreateManyRole_user_roleToroleInput], {nullable:false})
    @Type(() => userCreateManyRole_user_roleToroleInput)
    data!: Array<userCreateManyRole_user_roleToroleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
