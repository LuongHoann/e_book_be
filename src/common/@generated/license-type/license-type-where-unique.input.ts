import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_typeWhereInput } from './license-type-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { LicenseListRelationFilter } from '../prisma/license-list-relation-filter.input';

@InputType()
export class license_typeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [license_typeWhereInput], {nullable:true})
    @Type(() => license_typeWhereInput)
    AND?: Array<license_typeWhereInput>;

    @Field(() => [license_typeWhereInput], {nullable:true})
    @Type(() => license_typeWhereInput)
    OR?: Array<license_typeWhereInput>;

    @Field(() => [license_typeWhereInput], {nullable:true})
    @Type(() => license_typeWhereInput)
    NOT?: Array<license_typeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    download_count?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => BoolFilter, {nullable:true})
    status?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiration_date?: DateTimeNullableFilter;

    @Field(() => LicenseListRelationFilter, {nullable:true})
    @Type(() => LicenseListRelationFilter)
    license?: LicenseListRelationFilter;
}
