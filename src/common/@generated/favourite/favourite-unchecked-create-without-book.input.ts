import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class favouriteUncheckedCreateWithoutBookInput {

    @Field(() => String, {nullable:false})
    user_id!: string;
}
