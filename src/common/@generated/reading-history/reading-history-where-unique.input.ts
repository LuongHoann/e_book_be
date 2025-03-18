import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reading_historyUser_idBook_idCompoundUniqueInput } from './reading-history-user-id-book-id-compound-unique.input';
import { reading_historyWhereInput } from './reading-history-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BookScalarRelationFilter } from '../prisma/book-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../prisma/user-scalar-relation-filter.input';

@InputType()
export class reading_historyWhereUniqueInput {

    @Field(() => reading_historyUser_idBook_idCompoundUniqueInput, {nullable:true})
    user_id_book_id?: reading_historyUser_idBook_idCompoundUniqueInput;

    @Field(() => [reading_historyWhereInput], {nullable:true})
    AND?: Array<reading_historyWhereInput>;

    @Field(() => [reading_historyWhereInput], {nullable:true})
    OR?: Array<reading_historyWhereInput>;

    @Field(() => [reading_historyWhereInput], {nullable:true})
    NOT?: Array<reading_historyWhereInput>;

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

    @Field(() => BookScalarRelationFilter, {nullable:true})
    @Type(() => BookScalarRelationFilter)
    book?: BookScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
