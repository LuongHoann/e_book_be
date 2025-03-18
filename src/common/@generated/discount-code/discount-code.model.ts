import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Int } from '@nestjs/graphql';
import { book } from '../book/book.model';
import { area } from '../area/area.model';
import { Discount_codeCount } from '../prisma/discount-code-count.output';

@ObjectType()
export class discount_code {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    discount_code_name!: string | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    discount_value!: Decimal | null;

    @Field(() => Int, {nullable:true})
    discount_value_percent!: number | null;

    @Field(() => String, {nullable:true})
    area_name!: string | null;

    @Field(() => [book], {nullable:true})
    book?: Array<book>;

    @Field(() => area, {nullable:true})
    area?: area | null;

    @Field(() => Discount_codeCount, {nullable:false})
    _count?: Discount_codeCount;
}
