import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { book } from '../book/book.model';
import { user } from '../user/user.model';

@ObjectType()
export class favourite {

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => book, {nullable:false})
    book?: book;

    @Field(() => user, {nullable:false})
    user?: user;
}
