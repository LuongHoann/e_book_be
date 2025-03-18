import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleCreateManyUser_role_user_idTouserInput } from './role-create-many-user-role-user-id-touser.input';
import { Type } from 'class-transformer';

@InputType()
export class roleCreateManyUser_role_user_idTouserInputEnvelope {

    @Field(() => [roleCreateManyUser_role_user_idTouserInput], {nullable:false})
    @Type(() => roleCreateManyUser_role_user_idTouserInput)
    data!: Array<roleCreateManyUser_role_user_idTouserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
