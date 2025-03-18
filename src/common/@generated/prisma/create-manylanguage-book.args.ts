import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_bookCreateManyInput } from '../language-book/language-book-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManylanguageBookArgs {

    @Field(() => [language_bookCreateManyInput], {nullable:false})
    @Type(() => language_bookCreateManyInput)
    data!: Array<language_bookCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
