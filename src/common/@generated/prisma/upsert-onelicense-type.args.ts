import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_typeWhereUniqueInput } from '../license-type/license-type-where-unique.input';
import { Type } from 'class-transformer';
import { license_typeCreateInput } from '../license-type/license-type-create.input';
import { license_typeUpdateInput } from '../license-type/license-type-update.input';

@ArgsType()
export class UpsertOnelicenseTypeArgs {

    @Field(() => license_typeWhereUniqueInput, {nullable:false})
    @Type(() => license_typeWhereUniqueInput)
    where!: license_typeWhereUniqueInput;

    @Field(() => license_typeCreateInput, {nullable:false})
    @Type(() => license_typeCreateInput)
    create!: license_typeCreateInput;

    @Field(() => license_typeUpdateInput, {nullable:false})
    @Type(() => license_typeUpdateInput)
    update!: license_typeUpdateInput;
}
