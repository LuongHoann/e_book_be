import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class bookCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    book_title!: string;

    @Field(() => String, {nullable:false})
    author!: string;

    @Field(() => String, {nullable:false})
    isbn!: string;

    @Field(() => Int, {nullable:false})
    page_number!: number;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:true})
    banner_key?: string;

    @Field(() => String, {nullable:false})
    book_key!: string;

    @Field(() => Int, {nullable:false})
    published_at!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    status!: string;
}
