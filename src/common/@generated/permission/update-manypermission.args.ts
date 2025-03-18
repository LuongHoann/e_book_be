import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionUpdateManyMutationInput } from './permission-update-many-mutation.input';
import { Type } from 'class-transformer';
import { permissionWhereInput } from './permission-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManypermissionArgs {

    @Field(() => permissionUpdateManyMutationInput, {nullable:false})
    @Type(() => permissionUpdateManyMutationInput)
    data!: permissionUpdateManyMutationInput;

    @Field(() => permissionWhereInput, {nullable:true})
    @Type(() => permissionWhereInput)
    where?: permissionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
