import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BookScalarRelationFilter } from '../prisma/book-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../prisma/user-scalar-relation-filter.input';

@InputType()
export class transaction_historyWhereInput {

    @Field(() => [transaction_historyWhereInput], {nullable:true})
    AND?: Array<transaction_historyWhereInput>;

    @Field(() => [transaction_historyWhereInput], {nullable:true})
    OR?: Array<transaction_historyWhereInput>;

    @Field(() => [transaction_historyWhereInput], {nullable:true})
    NOT?: Array<transaction_historyWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    payment_date?: DateTimeNullableFilter;

    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: BookScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
