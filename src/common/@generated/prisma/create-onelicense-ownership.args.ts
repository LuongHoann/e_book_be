import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_ownershipCreateInput } from '../license-ownership/license-ownership-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelicenseOwnershipArgs {

    @Field(() => license_ownershipCreateInput, {nullable:false})
    @Type(() => license_ownershipCreateInput)
    data!: license_ownershipCreateInput;
}
