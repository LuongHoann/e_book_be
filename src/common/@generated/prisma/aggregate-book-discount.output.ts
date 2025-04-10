import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Book_discountCountAggregate } from './book-discount-count-aggregate.output';
import { Book_discountAvgAggregate } from './book-discount-avg-aggregate.output';
import { Book_discountSumAggregate } from './book-discount-sum-aggregate.output';
import { Book_discountMinAggregate } from './book-discount-min-aggregate.output';
import { Book_discountMaxAggregate } from './book-discount-max-aggregate.output';

@ObjectType()
export class AggregateBook_discount {

    @Field(() => Book_discountCountAggregate, {nullable:true})
    _count?: Book_discountCountAggregate;

    @Field(() => Book_discountAvgAggregate, {nullable:true})
    _avg?: Book_discountAvgAggregate;

    @Field(() => Book_discountSumAggregate, {nullable:true})
    _sum?: Book_discountSumAggregate;

    @Field(() => Book_discountMinAggregate, {nullable:true})
    _min?: Book_discountMinAggregate;

    @Field(() => Book_discountMaxAggregate, {nullable:true})
    _max?: Book_discountMaxAggregate;
}
