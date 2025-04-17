import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class category_bookUncheckedCreateWithoutCategoryInput {

    @Field(() => String, {nullable:false})
    book_id!: string;
}
