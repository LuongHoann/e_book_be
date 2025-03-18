import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Language_bookCountAggregate } from './language-book-count-aggregate.output';
import { Language_bookAvgAggregate } from './language-book-avg-aggregate.output';
import { Language_bookSumAggregate } from './language-book-sum-aggregate.output';
import { Language_bookMinAggregate } from './language-book-min-aggregate.output';
import { Language_bookMaxAggregate } from './language-book-max-aggregate.output';

@ObjectType()
export class AggregateLanguage_book {

    @Field(() => Language_bookCountAggregate, {nullable:true})
    _count?: Language_bookCountAggregate;

    @Field(() => Language_bookAvgAggregate, {nullable:true})
    _avg?: Language_bookAvgAggregate;

    @Field(() => Language_bookSumAggregate, {nullable:true})
    _sum?: Language_bookSumAggregate;

    @Field(() => Language_bookMinAggregate, {nullable:true})
    _min?: Language_bookMinAggregate;

    @Field(() => Language_bookMaxAggregate, {nullable:true})
    _max?: Language_bookMaxAggregate;
}
