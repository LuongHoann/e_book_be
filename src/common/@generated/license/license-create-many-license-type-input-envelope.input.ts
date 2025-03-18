import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseCreateManyLicense_typeInput } from './license-create-many-license-type.input';
import { Type } from 'class-transformer';

@InputType()
export class licenseCreateManyLicense_typeInputEnvelope {

    @Field(() => [licenseCreateManyLicense_typeInput], {nullable:false})
    @Type(() => licenseCreateManyLicense_typeInput)
    data!: Array<licenseCreateManyLicense_typeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
