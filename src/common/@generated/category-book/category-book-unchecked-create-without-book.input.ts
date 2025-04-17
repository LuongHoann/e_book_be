import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class category_bookUncheckedCreateWithoutBookInput {

    @Field(() => Int, {nullable:true})
    category_id?: number;
}
