import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class language_bookUncheckedCreateWithoutLanguageInput {

    @Field(() => String, {nullable:false})
    book_id!: string;
}
