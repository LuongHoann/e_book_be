import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Language_bookListRelationFilter } from '../prisma/language-book-list-relation-filter.input';

@InputType()
export class languageWhereInput {

    @Field(() => [languageWhereInput], {nullable:true})
    AND?: Array<languageWhereInput>;

    @Field(() => [languageWhereInput], {nullable:true})
    OR?: Array<languageWhereInput>;

    @Field(() => [languageWhereInput], {nullable:true})
    NOT?: Array<languageWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    language_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    language_code?: StringFilter;

    @Field(() => Language_bookListRelationFilter, {nullable:true})
    language_book?: Language_bookListRelationFilter;
}
