import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class category_bookCreateManyBookInput {

    @Field(() => String, {nullable:false})
    category!: string;
}
