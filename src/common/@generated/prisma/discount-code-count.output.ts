import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Discount_codeCount {

    @Field(() => Int, {nullable:false})
    book!: number;
}
