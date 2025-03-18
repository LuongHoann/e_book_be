import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_typeCreateInput } from '../license-type/license-type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelicenseTypeArgs {

    @Field(() => license_typeCreateInput, {nullable:false})
    @Type(() => license_typeCreateInput)
    data!: license_typeCreateInput;
}
