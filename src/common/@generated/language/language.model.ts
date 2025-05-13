import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { language_book } from '../language-book/language-book.model';
import { LanguageCount } from '../prisma/language-count.output';

@ObjectType()
export class language {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    native_name!: string;

    @Field(() => [language_book], {nullable:true})
    language_book?: Array<language_book>;

    @Field(() => LanguageCount, {nullable:false})
    _count?: LanguageCount;
}
