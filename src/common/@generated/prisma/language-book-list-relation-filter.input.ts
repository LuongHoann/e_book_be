import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookWhereInput } from '../language-book/language-book-where.input';

@InputType()
export class Language_bookListRelationFilter {

    @Field(() => language_bookWhereInput, {nullable:true})
    every?: language_bookWhereInput;

    @Field(() => language_bookWhereInput, {nullable:true})
    some?: language_bookWhereInput;

    @Field(() => language_bookWhereInput, {nullable:true})
    none?: language_bookWhereInput;
}
