import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userScalarWhereInput } from './user-scalar-where.input';
import { Type } from 'class-transformer';
import { userUpdateManyMutationInput } from './user-update-many-mutation.input';

@InputType()
export class userUpdateManyWithWhereWithoutRole_user_roleToroleInput {

    @Field(() => userScalarWhereInput, {nullable:false})
    @Type(() => userScalarWhereInput)
    where!: userScalarWhereInput;

    @Field(() => userUpdateManyMutationInput, {nullable:false})
    @Type(() => userUpdateManyMutationInput)
    data!: userUpdateManyMutationInput;
}
