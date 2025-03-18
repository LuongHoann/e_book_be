import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_typeWhereInput } from '../license-type/license-type-where.input';
import { Type } from 'class-transformer';
import { license_typeOrderByWithRelationInput } from '../license-type/license-type-order-by-with-relation.input';
import { license_typeWhereUniqueInput } from '../license-type/license-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { License_typeScalarFieldEnum } from './license-type-scalar-field.enum';

@ArgsType()
export class FindFirstlicenseTypeOrThrowArgs {

    @Field(() => license_typeWhereInput, {nullable:true})
    @Type(() => license_typeWhereInput)
    where?: license_typeWhereInput;

    @Field(() => [license_typeOrderByWithRelationInput], {nullable:true})
    @Type(() => license_typeOrderByWithRelationInput)
    orderBy?: Array<license_typeOrderByWithRelationInput>;

    @Field(() => license_typeWhereUniqueInput, {nullable:true})
    @Type(() => license_typeWhereUniqueInput)
    cursor?: license_typeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [License_typeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${License_typeScalarFieldEnum}`>;
}
