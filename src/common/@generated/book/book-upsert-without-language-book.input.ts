import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateWithoutLanguage_bookInput } from './book-update-without-language-book.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutLanguage_bookInput } from './book-create-without-language-book.input';
import { bookWhereInput } from './book-where.input';

@InputType()
export class bookUpsertWithoutLanguage_bookInput {

    @Field(() => bookUpdateWithoutLanguage_bookInput, {nullable:false})
    @Type(() => bookUpdateWithoutLanguage_bookInput)
    update!: bookUpdateWithoutLanguage_bookInput;

    @Field(() => bookCreateWithoutLanguage_bookInput, {nullable:false})
    @Type(() => bookCreateWithoutLanguage_bookInput)
    create!: bookCreateWithoutLanguage_bookInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;
}
