import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseWhereInput } from '../license/license-where.input';

@InputType()
export class LicenseListRelationFilter {

    @Field(() => licenseWhereInput, {nullable:true})
    every?: licenseWhereInput;

    @Field(() => licenseWhereInput, {nullable:true})
    some?: licenseWhereInput;

    @Field(() => licenseWhereInput, {nullable:true})
    none?: licenseWhereInput;
}
