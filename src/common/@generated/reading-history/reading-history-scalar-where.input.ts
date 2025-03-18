import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class reading_historyScalarWhereInput {

    @Field(() => [reading_historyScalarWhereInput], {nullable:true})
    AND?: Array<reading_historyScalarWhereInput>;

    @Field(() => [reading_historyScalarWhereInput], {nullable:true})
    OR?: Array<reading_historyScalarWhereInput>;

    @Field(() => [reading_historyScalarWhereInput], {nullable:true})
    NOT?: Array<reading_historyScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    state?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    page?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    update_at?: DateTimeNullableFilter;
}
