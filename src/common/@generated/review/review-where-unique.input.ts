import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reviewUser_idBook_idCompoundUniqueInput } from './review-user-id-book-id-compound-unique.input';
import { reviewWhereInput } from './review-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BookScalarRelationFilter } from '../prisma/book-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../prisma/user-scalar-relation-filter.input';

@InputType()
export class reviewWhereUniqueInput {

    @Field(() => reviewUser_idBook_idCompoundUniqueInput, {nullable:true})
    user_id_book_id?: reviewUser_idBook_idCompoundUniqueInput;

    @Field(() => [reviewWhereInput], {nullable:true})
    AND?: Array<reviewWhereInput>;

    @Field(() => [reviewWhereInput], {nullable:true})
    OR?: Array<reviewWhereInput>;

    @Field(() => [reviewWhereInput], {nullable:true})
    NOT?: Array<reviewWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => IntFilter, {nullable:true})
    rating?: IntFilter;

    @Field(() => BookScalarRelationFilter, {nullable:true})
    @Type(() => BookScalarRelationFilter)
    book?: BookScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
