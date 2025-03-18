import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookScalarWhereInput } from './language-book-scalar-where.input';
import { Type } from 'class-transformer';
import { language_bookUncheckedUpdateManyWithoutBookInput } from './language-book-unchecked-update-many-without-book.input';

@InputType()
export class language_bookUpdateManyWithWhereWithoutBookInput {

    @Field(() => language_bookScalarWhereInput, {nullable:false})
    @Type(() => language_bookScalarWhereInput)
    where!: language_bookScalarWhereInput;

    @Field(() => language_bookUncheckedUpdateManyWithoutBookInput, {nullable:false})
    @Type(() => language_bookUncheckedUpdateManyWithoutBookInput)
    data!: language_bookUncheckedUpdateManyWithoutBookInput;
}
