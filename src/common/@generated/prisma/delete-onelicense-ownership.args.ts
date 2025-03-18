import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_ownershipWhereUniqueInput } from '../license-ownership/license-ownership-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnelicenseOwnershipArgs {

    @Field(() => license_ownershipWhereUniqueInput, {nullable:false})
    @Type(() => license_ownershipWhereUniqueInput)
    where!: license_ownershipWhereUniqueInput;
}
