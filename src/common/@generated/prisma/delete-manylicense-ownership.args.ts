import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_ownershipWhereInput } from '../license-ownership/license-ownership-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManylicenseOwnershipArgs {

    @Field(() => license_ownershipWhereInput, {nullable:true})
    @Type(() => license_ownershipWhereInput)
    where?: license_ownershipWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
