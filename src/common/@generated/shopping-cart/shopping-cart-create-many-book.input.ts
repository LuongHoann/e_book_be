import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class shopping_cartCreateManyBookInput {

    @Field(() => String, {nullable:false})
    user_id!: string;
}
