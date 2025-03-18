import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_ownershipWhereUniqueInput } from '../license-ownership/license-ownership-where-unique.input';
import { Type } from 'class-transformer';
import { license_ownershipCreateInput } from '../license-ownership/license-ownership-create.input';
import { license_ownershipUpdateInput } from '../license-ownership/license-ownership-update.input';

@ArgsType()
export class UpsertOnelicenseOwnershipArgs {

    @Field(() => license_ownershipWhereUniqueInput, {nullable:false})
    @Type(() => license_ownershipWhereUniqueInput)
    where!: license_ownershipWhereUniqueInput;

    @Field(() => license_ownershipCreateInput, {nullable:false})
    @Type(() => license_ownershipCreateInput)
    create!: license_ownershipCreateInput;

    @Field(() => license_ownershipUpdateInput, {nullable:false})
    @Type(() => license_ownershipUpdateInput)
    update!: license_ownershipUpdateInput;
}
