import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { discount_codeWhereUniqueInput } from '../discount-code/discount-code-where-unique.input';
import { Type } from 'class-transformer';
import { discount_codeCreateInput } from '../discount-code/discount-code-create.input';
import { discount_codeUpdateInput } from '../discount-code/discount-code-update.input';

@ArgsType()
export class UpsertOnediscountCodeArgs {

    @Field(() => discount_codeWhereUniqueInput, {nullable:false})
    @Type(() => discount_codeWhereUniqueInput)
    where!: discount_codeWhereUniqueInput;

    @Field(() => discount_codeCreateInput, {nullable:false})
    @Type(() => discount_codeCreateInput)
    create!: discount_codeCreateInput;

    @Field(() => discount_codeUpdateInput, {nullable:false})
    @Type(() => discount_codeUpdateInput)
    update!: discount_codeUpdateInput;
}
