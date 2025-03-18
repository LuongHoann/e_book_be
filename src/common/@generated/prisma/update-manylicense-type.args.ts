import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_typeUpdateManyMutationInput } from '../license-type/license-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { license_typeWhereInput } from '../license-type/license-type-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManylicenseTypeArgs {

    @Field(() => license_typeUpdateManyMutationInput, {nullable:false})
    @Type(() => license_typeUpdateManyMutationInput)
    data!: license_typeUpdateManyMutationInput;

    @Field(() => license_typeWhereInput, {nullable:true})
    @Type(() => license_typeWhereInput)
    where?: license_typeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
