import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class LanguageAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;
}
