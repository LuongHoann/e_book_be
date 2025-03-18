import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';

@InputType()
export class newsScalarWhereInput {

    @Field(() => [newsScalarWhereInput], {nullable:true})
    AND?: Array<newsScalarWhereInput>;

    @Field(() => [newsScalarWhereInput], {nullable:true})
    OR?: Array<newsScalarWhereInput>;

    @Field(() => [newsScalarWhereInput], {nullable:true})
    NOT?: Array<newsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    publish_date?: DateTimeNullableFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;
}
