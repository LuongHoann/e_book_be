import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class licenseScalarWhereInput {

    @Field(() => [licenseScalarWhereInput], {nullable:true})
    AND?: Array<licenseScalarWhereInput>;

    @Field(() => [licenseScalarWhereInput], {nullable:true})
    OR?: Array<licenseScalarWhereInput>;

    @Field(() => [licenseScalarWhereInput], {nullable:true})
    NOT?: Array<licenseScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    license_name?: StringNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    book_id?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    license_type_id?: UuidNullableFilter;
}
