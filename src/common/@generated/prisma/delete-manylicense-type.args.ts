import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_typeWhereInput } from '../license-type/license-type-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManylicenseTypeArgs {

    @Field(() => license_typeWhereInput, {nullable:true})
    @Type(() => license_typeWhereInput)
    where?: license_typeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
