import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionScalarWhereInput } from './permission-scalar-where.input';
import { Type } from 'class-transformer';
import { permissionUpdateManyMutationInput } from './permission-update-many-mutation.input';

@InputType()
export class permissionUpdateManyWithWhereWithoutRoleInput {

    @Field(() => permissionScalarWhereInput, {nullable:false})
    @Type(() => permissionScalarWhereInput)
    where!: permissionScalarWhereInput;

    @Field(() => permissionUpdateManyMutationInput, {nullable:false})
    @Type(() => permissionUpdateManyMutationInput)
    data!: permissionUpdateManyMutationInput;
}
