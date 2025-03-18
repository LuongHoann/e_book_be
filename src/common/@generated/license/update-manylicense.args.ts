import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { licenseUpdateManyMutationInput } from './license-update-many-mutation.input';
import { Type } from 'class-transformer';
import { licenseWhereInput } from './license-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManylicenseArgs {

    @Field(() => licenseUpdateManyMutationInput, {nullable:false})
    @Type(() => licenseUpdateManyMutationInput)
    data!: licenseUpdateManyMutationInput;

    @Field(() => licenseWhereInput, {nullable:true})
    @Type(() => licenseWhereInput)
    where?: licenseWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
