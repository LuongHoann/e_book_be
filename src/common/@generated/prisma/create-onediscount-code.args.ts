import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { discount_codeCreateInput } from '../discount-code/discount-code-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnediscountCodeArgs {

    @Field(() => discount_codeCreateInput, {nullable:true})
    @Type(() => discount_codeCreateInput)
    data?: discount_codeCreateInput;
}
