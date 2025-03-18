import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleScalarWhereInput } from './role-scalar-where.input';
import { Type } from 'class-transformer';
import { roleUpdateManyMutationInput } from './role-update-many-mutation.input';

@InputType()
export class roleUpdateManyWithWhereWithoutUser_role_user_idTouserInput {

    @Field(() => roleScalarWhereInput, {nullable:false})
    @Type(() => roleScalarWhereInput)
    where!: roleScalarWhereInput;

    @Field(() => roleUpdateManyMutationInput, {nullable:false})
    @Type(() => roleUpdateManyMutationInput)
    data!: roleUpdateManyMutationInput;
}
