import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookScalarWhereInput } from './language-book-scalar-where.input';
import { Type } from 'class-transformer';
import { language_bookUncheckedUpdateManyWithoutLanguageInput } from './language-book-unchecked-update-many-without-language.input';

@InputType()
export class language_bookUpdateManyWithWhereWithoutLanguageInput {

    @Field(() => language_bookScalarWhereInput, {nullable:false})
    @Type(() => language_bookScalarWhereInput)
    where!: language_bookScalarWhereInput;

    @Field(() => language_bookUncheckedUpdateManyWithoutLanguageInput, {nullable:false})
    @Type(() => language_bookUncheckedUpdateManyWithoutLanguageInput)
    data!: language_bookUncheckedUpdateManyWithoutLanguageInput;
}
