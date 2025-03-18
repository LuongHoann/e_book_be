import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_bookUpdateInput } from '../language-book/language-book-update.input';
import { Type } from 'class-transformer';
import { language_bookWhereUniqueInput } from '../language-book/language-book-where-unique.input';

@ArgsType()
export class UpdateOnelanguageBookArgs {

    @Field(() => language_bookUpdateInput, {nullable:false})
    @Type(() => language_bookUpdateInput)
    data!: language_bookUpdateInput;

    @Field(() => language_bookWhereUniqueInput, {nullable:false})
    @Type(() => language_bookWhereUniqueInput)
    where!: language_bookWhereUniqueInput;
}
