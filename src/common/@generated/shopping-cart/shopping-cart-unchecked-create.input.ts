import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class shopping_cartUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;
}
