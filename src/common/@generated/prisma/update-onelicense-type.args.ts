import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_typeUpdateInput } from '../license-type/license-type-update.input';
import { Type } from 'class-transformer';
import { license_typeWhereUniqueInput } from '../license-type/license-type-where-unique.input';

@ArgsType()
export class UpdateOnelicenseTypeArgs {

    @Field(() => license_typeUpdateInput, {nullable:false})
    @Type(() => license_typeUpdateInput)
    data!: license_typeUpdateInput;

    @Field(() => license_typeWhereUniqueInput, {nullable:false})
    @Type(() => license_typeWhereUniqueInput)
    where!: license_typeWhereUniqueInput;
}
