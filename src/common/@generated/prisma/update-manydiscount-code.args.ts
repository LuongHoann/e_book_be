import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { discount_codeUpdateManyMutationInput } from '../discount-code/discount-code-update-many-mutation.input';
import { Type } from 'class-transformer';
import { discount_codeWhereInput } from '../discount-code/discount-code-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManydiscountCodeArgs {

    @Field(() => discount_codeUpdateManyMutationInput, {nullable:false})
    @Type(() => discount_codeUpdateManyMutationInput)
    data!: discount_codeUpdateManyMutationInput;

    @Field(() => discount_codeWhereInput, {nullable:true})
    @Type(() => discount_codeWhereInput)
    where?: discount_codeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
