import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { licenseUncheckedCreateNestedManyWithoutLicense_typeInput } from '../license/license-unchecked-create-nested-many-without-license-type.input';

@InputType()
export class license_typeUncheckedCreateInput {

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

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => licenseUncheckedCreateNestedManyWithoutLicense_typeInput, {nullable:true})
    @Type(() => licenseUncheckedCreateNestedManyWithoutLicense_typeInput)
    license?: licenseUncheckedCreateNestedManyWithoutLicense_typeInput;
}
