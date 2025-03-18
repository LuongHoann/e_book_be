import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutCategory_bookInput } from './book-update-without-category-book.input';

@InputType()
export class bookUpdateToOneWithWhereWithoutCategory_bookInput {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => bookUpdateWithoutCategory_bookInput, {nullable:false})
    @Type(() => bookUpdateWithoutCategory_bookInput)
    data!: bookUpdateWithoutCategory_bookInput;
}
