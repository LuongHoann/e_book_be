import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_bookCreateInput } from '../language-book/language-book-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelanguageBookArgs {

    @Field(() => language_bookCreateInput, {nullable:false})
    @Type(() => language_bookCreateInput)
    data!: language_bookCreateInput;
}
