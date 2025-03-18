import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookScalarWhereInput } from './category-book-scalar-where.input';
import { Type } from 'class-transformer';
import { category_bookUncheckedUpdateManyWithoutBookInput } from './category-book-unchecked-update-many-without-book.input';

@InputType()
export class category_bookUpdateManyWithWhereWithoutBookInput {

    @Field(() => category_bookScalarWhereInput, {nullable:false})
    @Type(() => category_bookScalarWhereInput)
    where!: category_bookScalarWhereInput;

    @Field(() => category_bookUncheckedUpdateManyWithoutBookInput, {nullable:false})
    @Type(() => category_bookUncheckedUpdateManyWithoutBookInput)
    data!: category_bookUncheckedUpdateManyWithoutBookInput;
}
