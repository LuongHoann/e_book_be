import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_bookWhereUniqueInput } from '../language-book/language-book-where-unique.input';
import { Type } from 'class-transformer';
import { language_bookCreateInput } from '../language-book/language-book-create.input';
import { language_bookUpdateInput } from '../language-book/language-book-update.input';

@ArgsType()
export class UpsertOnelanguageBookArgs {

    @Field(() => language_bookWhereUniqueInput, {nullable:false})
    @Type(() => language_bookWhereUniqueInput)
    where!: language_bookWhereUniqueInput;

    @Field(() => language_bookCreateInput, {nullable:false})
    @Type(() => language_bookCreateInput)
    create!: language_bookCreateInput;

    @Field(() => language_bookUpdateInput, {nullable:false})
    @Type(() => language_bookUpdateInput)
    update!: language_bookUpdateInput;
}
