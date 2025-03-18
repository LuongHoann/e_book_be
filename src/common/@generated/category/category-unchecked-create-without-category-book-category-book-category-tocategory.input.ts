import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class categoryUncheckedCreateWithoutCategory_book_category_book_categoryTocategoryInput {

    @Field(() => String, {nullable:false})
    name!: string;
}
