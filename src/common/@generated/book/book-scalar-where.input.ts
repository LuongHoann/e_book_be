import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class bookScalarWhereInput {

    @Field(() => [bookScalarWhereInput], {nullable:true})
    AND?: Array<bookScalarWhereInput>;

    @Field(() => [bookScalarWhereInput], {nullable:true})
    OR?: Array<bookScalarWhereInput>;

    @Field(() => [bookScalarWhereInput], {nullable:true})
    NOT?: Array<bookScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    book_title?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    pushlied_at?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    author?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    isbn?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    page_number?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    discount_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    views?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    book_content_url?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    book_banner_url?: StringNullableFilter;
}
