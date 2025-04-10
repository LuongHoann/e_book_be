import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseWhereInput } from './license-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { BookNullableScalarRelationFilter } from '../prisma/book-nullable-scalar-relation-filter.input';
import { License_typeNullableScalarRelationFilter } from '../prisma/license-type-nullable-scalar-relation-filter.input';
import { License_ownershipListRelationFilter } from '../prisma/license-ownership-list-relation-filter.input';

@InputType()
export class licenseWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [licenseWhereInput], {nullable:true})
    AND?: Array<licenseWhereInput>;

    @Field(() => [licenseWhereInput], {nullable:true})
    OR?: Array<licenseWhereInput>;

    @Field(() => [licenseWhereInput], {nullable:true})
    NOT?: Array<licenseWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    license_name?: StringNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    book_id?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    license_type_id?: UuidNullableFilter;

    @Field(() => BookNullableScalarRelationFilter, {nullable:true})
    book?: BookNullableScalarRelationFilter;

    @Field(() => License_typeNullableScalarRelationFilter, {nullable:true})
    license_type?: License_typeNullableScalarRelationFilter;

    @Field(() => License_ownershipListRelationFilter, {nullable:true})
    license_ownership?: License_ownershipListRelationFilter;
}
