import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_ownershipCreateManyLicenseInput } from './license-ownership-create-many-license.input';
import { Type } from 'class-transformer';

@InputType()
export class license_ownershipCreateManyLicenseInputEnvelope {

    @Field(() => [license_ownershipCreateManyLicenseInput], {nullable:false})
    @Type(() => license_ownershipCreateManyLicenseInput)
    data!: Array<license_ownershipCreateManyLicenseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
