import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { favouriteBook_idUser_idCompoundUniqueInput } from './favourite-book-id-user-id-compound-unique.input';
import { favouriteWhereInput } from './favourite-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { BookScalarRelationFilter } from '../prisma/book-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../prisma/user-scalar-relation-filter.input';

@InputType()
export class favouriteWhereUniqueInput {

    @Field(() => favouriteBook_idUser_idCompoundUniqueInput, {nullable:true})
    book_id_user_id?: favouriteBook_idUser_idCompoundUniqueInput;

    @Field(() => [favouriteWhereInput], {nullable:true})
    AND?: Array<favouriteWhereInput>;

    @Field(() => [favouriteWhereInput], {nullable:true})
    OR?: Array<favouriteWhereInput>;

    @Field(() => [favouriteWhereInput], {nullable:true})
    NOT?: Array<favouriteWhereInput>;

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
