import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateWithoutCategory_bookInput } from './book-update-without-category-book.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutCategory_bookInput } from './book-create-without-category-book.input';
import { bookWhereInput } from './book-where.input';

@InputType()
export class bookUpsertWithoutCategory_bookInput {

    @Field(() => bookUpdateWithoutCategory_bookInput, {nullable:false})
    @Type(() => bookUpdateWithoutCategory_bookInput)
    update!: bookUpdateWithoutCategory_bookInput;

    @Field(() => bookCreateWithoutCategory_bookInput, {nullable:false})
    @Type(() => bookCreateWithoutCategory_bookInput)
    create!: bookCreateWithoutCategory_bookInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;
}
