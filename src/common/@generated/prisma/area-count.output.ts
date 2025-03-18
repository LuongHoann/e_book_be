import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AreaCount {

    @Field(() => Int, {nullable:false})
    discount_code!: number;
}
