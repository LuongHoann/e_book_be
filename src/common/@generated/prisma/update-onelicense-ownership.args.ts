import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_ownershipUpdateInput } from '../license-ownership/license-ownership-update.input';
import { Type } from 'class-transformer';
import { license_ownershipWhereUniqueInput } from '../license-ownership/license-ownership-where-unique.input';

@ArgsType()
export class UpdateOnelicenseOwnershipArgs {

    @Field(() => license_ownershipUpdateInput, {nullable:false})
    @Type(() => license_ownershipUpdateInput)
    data!: license_ownershipUpdateInput;

    @Field(() => license_ownershipWhereUniqueInput, {nullable:false})
    @Type(() => license_ownershipWhereUniqueInput)
    where!: license_ownershipWhereUniqueInput;
}
