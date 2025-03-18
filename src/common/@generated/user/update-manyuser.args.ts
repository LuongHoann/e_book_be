import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { userUpdateManyMutationInput } from './user-update-many-mutation.input';
import { Type } from 'class-transformer';
import { userWhereInput } from './user-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyuserArgs {

    @Field(() => userUpdateManyMutationInput, {nullable:false})
    @Type(() => userUpdateManyMutationInput)
    data!: userUpdateManyMutationInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
