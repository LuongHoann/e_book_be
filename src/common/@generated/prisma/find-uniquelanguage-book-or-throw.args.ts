import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_bookWhereUniqueInput } from '../language-book/language-book-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquelanguageBookOrThrowArgs {

    @Field(() => language_bookWhereUniqueInput, {nullable:false})
    @Type(() => language_bookWhereUniqueInput)
    where!: language_bookWhereUniqueInput;
}
