import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_ownershipUpdateManyMutationInput } from '../license-ownership/license-ownership-update-many-mutation.input';
import { Type } from 'class-transformer';
import { license_ownershipWhereInput } from '../license-ownership/license-ownership-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManylicenseOwnershipArgs {

    @Field(() => license_ownershipUpdateManyMutationInput, {nullable:false})
    @Type(() => license_ownershipUpdateManyMutationInput)
    data!: license_ownershipUpdateManyMutationInput;

    @Field(() => license_ownershipWhereInput, {nullable:true})
    @Type(() => license_ownershipWhereInput)
    where?: license_ownershipWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
