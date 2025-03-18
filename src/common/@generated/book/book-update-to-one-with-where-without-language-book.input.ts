import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutLanguage_bookInput } from './book-update-without-language-book.input';

@InputType()
export class bookUpdateToOneWithWhereWithoutLanguage_bookInput {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => bookUpdateWithoutLanguage_bookInput, {nullable:false})
    @Type(() => bookUpdateWithoutLanguage_bookInput)
    data!: bookUpdateWithoutLanguage_bookInput;
}
