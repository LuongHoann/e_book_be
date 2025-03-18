import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Language_bookAvgAggregate {

    @Field(() => Float, {nullable:true})
    language_id?: number;
}
