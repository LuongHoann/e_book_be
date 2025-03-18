import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { discount_codeWhereInput } from '../discount-code/discount-code-where.input';
import { Type } from 'class-transformer';
import { discount_codeOrderByWithRelationInput } from '../discount-code/discount-code-order-by-with-relation.input';
import { discount_codeWhereUniqueInput } from '../discount-code/discount-code-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Discount_codeScalarFieldEnum } from './discount-code-scalar-field.enum';

@ArgsType()
export class FindManydiscountCodeArgs {

    @Field(() => discount_codeWhereInput, {nullable:true})
    @Type(() => discount_codeWhereInput)
    where?: discount_codeWhereInput;

    @Field(() => [discount_codeOrderByWithRelationInput], {nullable:true})
    @Type(() => discount_codeOrderByWithRelationInput)
    orderBy?: Array<discount_codeOrderByWithRelationInput>;

    @Field(() => discount_codeWhereUniqueInput, {nullable:true})
    @Type(() => discount_codeWhereUniqueInput)
    cursor?: discount_codeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Discount_codeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Discount_codeScalarFieldEnum}`>;
}
