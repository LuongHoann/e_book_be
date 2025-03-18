import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class transaction_historyScalarWhereInput {

    @Field(() => [transaction_historyScalarWhereInput], {nullable:true})
    AND?: Array<transaction_historyScalarWhereInput>;

    @Field(() => [transaction_historyScalarWhereInput], {nullable:true})
    OR?: Array<transaction_historyScalarWhereInput>;

    @Field(() => [transaction_historyScalarWhereInput], {nullable:true})
    NOT?: Array<transaction_historyScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    payment_date?: DateTimeNullableFilter;
}
