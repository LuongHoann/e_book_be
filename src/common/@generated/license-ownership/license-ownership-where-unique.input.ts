import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { license_ownershipWhereInput } from './license-ownership-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LicenseScalarRelationFilter } from '../prisma/license-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../prisma/user-scalar-relation-filter.input';

@InputType()
export class license_ownershipWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [license_ownershipWhereInput], {nullable:true})
    AND?: Array<license_ownershipWhereInput>;

    @Field(() => [license_ownershipWhereInput], {nullable:true})
    OR?: Array<license_ownershipWhereInput>;

    @Field(() => [license_ownershipWhereInput], {nullable:true})
    NOT?: Array<license_ownershipWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    license_id?: UuidFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    download_count?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiration_date?: DateTimeFilter;

    @Field(() => LicenseScalarRelationFilter, {nullable:true})
    @Type(() => LicenseScalarRelationFilter)
    license?: LicenseScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
