import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_ownershipScalarWhereInput } from './license-ownership-scalar-where.input';
import { Type } from 'class-transformer';
import { license_ownershipUpdateManyMutationInput } from './license-ownership-update-many-mutation.input';

@InputType()
export class license_ownershipUpdateManyWithWhereWithoutLicenseInput {

    @Field(() => license_ownershipScalarWhereInput, {nullable:false})
    @Type(() => license_ownershipScalarWhereInput)
    where!: license_ownershipScalarWhereInput;

    @Field(() => license_ownershipUpdateManyMutationInput, {nullable:false})
    @Type(() => license_ownershipUpdateManyMutationInput)
    data!: license_ownershipUpdateManyMutationInput;
}
