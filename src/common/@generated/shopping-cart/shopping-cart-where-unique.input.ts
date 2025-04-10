import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { shopping_cartBook_idUser_idCompoundUniqueInput } from './shopping-cart-book-id-user-id-compound-unique.input';
import { shopping_cartWhereInput } from './shopping-cart-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { BookScalarRelationFilter } from '../prisma/book-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../prisma/user-scalar-relation-filter.input';

@InputType()
export class shopping_cartWhereUniqueInput {

    @Field(() => shopping_cartBook_idUser_idCompoundUniqueInput, {nullable:true})
    book_id_user_id?: shopping_cartBook_idUser_idCompoundUniqueInput;

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
    book?: BookScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
