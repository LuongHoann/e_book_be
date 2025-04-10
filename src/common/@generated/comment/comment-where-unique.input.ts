import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { commentBook_idUser_idCompoundUniqueInput } from './comment-book-id-user-id-compound-unique.input';
import { commentWhereInput } from './comment-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BookScalarRelationFilter } from '../prisma/book-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../prisma/user-scalar-relation-filter.input';

@InputType()
export class commentWhereUniqueInput {

    @Field(() => commentBook_idUser_idCompoundUniqueInput, {nullable:true})
    book_id_user_id?: commentBook_idUser_idCompoundUniqueInput;

    @Field(() => [commentWhereInput], {nullable:true})
    AND?: Array<commentWhereInput>;

    @Field(() => [commentWhereInput], {nullable:true})
    OR?: Array<commentWhereInput>;

    @Field(() => [commentWhereInput], {nullable:true})
    NOT?: Array<commentWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: BookScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
