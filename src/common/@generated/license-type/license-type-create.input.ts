import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { licenseCreateNestedManyWithoutLicense_typeInput } from '../license/license-create-nested-many-without-license-type.input';

@InputType()
export class license_typeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    download_count!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

    @Field(() => Boolean, {nullable:false})
    status!: boolean;

    @Field(() => Date, {nullable:true})
    expiration_date?: Date | string;

    @Field(() => licenseCreateNestedManyWithoutLicense_typeInput, {nullable:true})
    @Type(() => licenseCreateNestedManyWithoutLicense_typeInput)
    license?: licenseCreateNestedManyWithoutLicense_typeInput;
}
