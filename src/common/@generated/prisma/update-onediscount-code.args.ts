import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { discount_codeUpdateInput } from '../discount-code/discount-code-update.input';
import { Type } from 'class-transformer';
import { discount_codeWhereUniqueInput } from '../discount-code/discount-code-where-unique.input';

@ArgsType()
export class UpdateOnediscountCodeArgs {

    @Field(() => discount_codeUpdateInput, {nullable:false})
    @Type(() => discount_codeUpdateInput)
    data!: discount_codeUpdateInput;

    @Field(() => discount_codeWhereUniqueInput, {nullable:false})
    @Type(() => discount_codeWhereUniqueInput)
    where!: discount_codeWhereUniqueInput;
}
