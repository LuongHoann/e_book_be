import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseWhereInput } from '../license/license-where.input';

@InputType()
export class LicenseNullableScalarRelationFilter {

    @Field(() => licenseWhereInput, {nullable:true})
    is?: licenseWhereInput;

    @Field(() => licenseWhereInput, {nullable:true})
    isNot?: licenseWhereInput;
}
