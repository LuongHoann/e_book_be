import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_ownershipWhereInput } from '../license-ownership/license-ownership-where.input';
import { Type } from 'class-transformer';
import { license_ownershipOrderByWithRelationInput } from '../license-ownership/license-ownership-order-by-with-relation.input';
import { license_ownershipWhereUniqueInput } from '../license-ownership/license-ownership-where-unique.input';
import { Int } from '@nestjs/graphql';
import { License_ownershipScalarFieldEnum } from './license-ownership-scalar-field.enum';

@ArgsType()
export class FindFirstlicenseOwnershipOrThrowArgs {

    @Field(() => license_ownershipWhereInput, {nullable:true})
    @Type(() => license_ownershipWhereInput)
    where?: license_ownershipWhereInput;

    @Field(() => [license_ownershipOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<license_ownershipOrderByWithRelationInput>;

    @Field(() => license_ownershipWhereUniqueInput, {nullable:true})
    cursor?: license_ownershipWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [License_ownershipScalarFieldEnum], {nullable:true})
    distinct?: Array<`${License_ownershipScalarFieldEnum}`>;
}
