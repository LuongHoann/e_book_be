import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Discount_codeCountAggregate } from './discount-code-count-aggregate.output';
import { Discount_codeAvgAggregate } from './discount-code-avg-aggregate.output';
import { Discount_codeSumAggregate } from './discount-code-sum-aggregate.output';
import { Discount_codeMinAggregate } from './discount-code-min-aggregate.output';
import { Discount_codeMaxAggregate } from './discount-code-max-aggregate.output';

@ObjectType()
export class AggregateDiscount_code {

    @Field(() => Discount_codeCountAggregate, {nullable:true})
    _count?: Discount_codeCountAggregate;

    @Field(() => Discount_codeAvgAggregate, {nullable:true})
    _avg?: Discount_codeAvgAggregate;

    @Field(() => Discount_codeSumAggregate, {nullable:true})
    _sum?: Discount_codeSumAggregate;

    @Field(() => Discount_codeMinAggregate, {nullable:true})
    _min?: Discount_codeMinAggregate;

    @Field(() => Discount_codeMaxAggregate, {nullable:true})
    _max?: Discount_codeMaxAggregate;
}
