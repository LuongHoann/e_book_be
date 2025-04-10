import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookLanguage_idBook_idCompoundUniqueInput } from './language-book-language-id-book-id-compound-unique.input';
import { language_bookWhereInput } from './language-book-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { BookScalarRelationFilter } from '../prisma/book-scalar-relation-filter.input';
import { LanguageScalarRelationFilter } from '../prisma/language-scalar-relation-filter.input';

@InputType()
export class language_bookWhereUniqueInput {

    @Field(() => language_bookLanguage_idBook_idCompoundUniqueInput, {nullable:true})
    language_id_book_id?: language_bookLanguage_idBook_idCompoundUniqueInput;

    @Field(() => [language_bookWhereInput], {nullable:true})
    AND?: Array<language_bookWhereInput>;

    @Field(() => [language_bookWhereInput], {nullable:true})
    OR?: Array<language_bookWhereInput>;

    @Field(() => [language_bookWhereInput], {nullable:true})
    NOT?: Array<language_bookWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    language_id?: IntFilter;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: BookScalarRelationFilter;

    @Field(() => LanguageScalarRelationFilter, {nullable:true})
    language?: LanguageScalarRelationFilter;
}
