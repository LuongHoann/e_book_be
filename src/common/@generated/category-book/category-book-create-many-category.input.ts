import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class category_bookCreateManyCategoryInput {

    @Field(() => String, {nullable:false})
    book_id!: string;
}
