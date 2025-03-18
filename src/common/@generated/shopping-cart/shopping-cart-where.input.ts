import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { BookScalarRelationFilter } from '../prisma/book-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../prisma/user-scalar-relation-filter.input';

@InputType()
export class shopping_cartWhereInput {

    @Field(() => [shopping_cartWhereInput], {nullable:true})
    AND?: Array<shopping_cartWhereInput>;

    @Field(() => [shopping_cartWhereInput], {nullable:true})
    OR?: Array<shopping_cartWhereInput>;

    @Field(() => [shopping_cartWhereInput], {nullable:true})
    NOT?: Array<shopping_cartWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => BookScalarRelationFilter, {nullable:true})
    @Type(() => BookScalarRelationFilter)
    book?: BookScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
