import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class commentUncheckedCreateWithoutBookInput {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:true})
    content?: string;
}
