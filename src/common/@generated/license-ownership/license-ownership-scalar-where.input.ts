import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class license_ownershipScalarWhereInput {

    @Field(() => [license_ownershipScalarWhereInput], {nullable:true})
    AND?: Array<license_ownershipScalarWhereInput>;

    @Field(() => [license_ownershipScalarWhereInput], {nullable:true})
    OR?: Array<license_ownershipScalarWhereInput>;

    @Field(() => [license_ownershipScalarWhereInput], {nullable:true})
    NOT?: Array<license_ownershipScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    license_id?: UuidFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    download_count?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiration_date?: DateTimeFilter;
}
