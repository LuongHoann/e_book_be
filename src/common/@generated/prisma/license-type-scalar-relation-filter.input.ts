import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_typeWhereInput } from '../license-type/license-type-where.input';
import { Type } from 'class-transformer';

@InputType()
export class License_typeScalarRelationFilter {

    @Field(() => license_typeWhereInput, {nullable:true})
    @Type(() => license_typeWhereInput)
    is?: license_typeWhereInput;

    @Field(() => license_typeWhereInput, {nullable:true})
    @Type(() => license_typeWhereInput)
    isNot?: license_typeWhereInput;
}
