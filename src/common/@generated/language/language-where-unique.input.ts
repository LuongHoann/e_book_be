import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languageWhereInput } from './language-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Language_bookListRelationFilter } from '../prisma/language-book-list-relation-filter.input';

@InputType()
export class languageWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => [languageWhereInput], {nullable:true})
    AND?: Array<languageWhereInput>;

    @Field(() => [languageWhereInput], {nullable:true})
    OR?: Array<languageWhereInput>;

    @Field(() => [languageWhereInput], {nullable:true})
    NOT?: Array<languageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => Language_bookListRelationFilter, {nullable:true})
    language_book?: Language_bookListRelationFilter;
}
