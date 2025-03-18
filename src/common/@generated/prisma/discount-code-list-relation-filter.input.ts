import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeWhereInput } from '../discount-code/discount-code-where.input';
import { Type } from 'class-transformer';

@InputType()
export class Discount_codeListRelationFilter {

    @Field(() => discount_codeWhereInput, {nullable:true})
    @Type(() => discount_codeWhereInput)
    every?: discount_codeWhereInput;

    @Field(() => discount_codeWhereInput, {nullable:true})
    @Type(() => discount_codeWhereInput)
    some?: discount_codeWhereInput;

    @Field(() => discount_codeWhereInput, {nullable:true})
    @Type(() => discount_codeWhereInput)
    none?: discount_codeWhereInput;
}
