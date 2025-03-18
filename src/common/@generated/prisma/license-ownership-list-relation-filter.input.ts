import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_ownershipWhereInput } from '../license-ownership/license-ownership-where.input';

@InputType()
export class License_ownershipListRelationFilter {

    @Field(() => license_ownershipWhereInput, {nullable:true})
    every?: license_ownershipWhereInput;

    @Field(() => license_ownershipWhereInput, {nullable:true})
    some?: license_ownershipWhereInput;

    @Field(() => license_ownershipWhereInput, {nullable:true})
    none?: license_ownershipWhereInput;
}
