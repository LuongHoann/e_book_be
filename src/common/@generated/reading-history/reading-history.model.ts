import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { book } from '../book/book.model';
import { user } from '../user/user.model';

@ObjectType()
export class reading_history {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => String, {nullable:true})
    state!: string | null;

    @Field(() => Int, {nullable:true})
    page!: number | null;

    @Field(() => Date, {nullable:true})
    update_at!: Date | null;

    @Field(() => book, {nullable:false})
    book?: book;

    @Field(() => user, {nullable:false})
    user?: user;
}
