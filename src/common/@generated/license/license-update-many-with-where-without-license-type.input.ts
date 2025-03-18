import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseScalarWhereInput } from './license-scalar-where.input';
import { Type } from 'class-transformer';
import { licenseUpdateManyMutationInput } from './license-update-many-mutation.input';

@InputType()
export class licenseUpdateManyWithWhereWithoutLicense_typeInput {

    @Field(() => licenseScalarWhereInput, {nullable:false})
    @Type(() => licenseScalarWhereInput)
    where!: licenseScalarWhereInput;

    @Field(() => licenseUpdateManyMutationInput, {nullable:false})
    @Type(() => licenseUpdateManyMutationInput)
    data!: licenseUpdateManyMutationInput;
}
