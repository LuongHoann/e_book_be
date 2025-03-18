import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_typeWhereUniqueInput } from '../license-type/license-type-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquelicenseTypeOrThrowArgs {

    @Field(() => license_typeWhereUniqueInput, {nullable:false})
    @Type(() => license_typeWhereUniqueInput)
    where!: license_typeWhereUniqueInput;
}
