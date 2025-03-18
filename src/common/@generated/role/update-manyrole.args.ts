import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roleUpdateManyMutationInput } from './role-update-many-mutation.input';
import { Type } from 'class-transformer';
import { roleWhereInput } from './role-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyroleArgs {

    @Field(() => roleUpdateManyMutationInput, {nullable:false})
    @Type(() => roleUpdateManyMutationInput)
    data!: roleUpdateManyMutationInput;

    @Field(() => roleWhereInput, {nullable:true})
    @Type(() => roleWhereInput)
    where?: roleWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
