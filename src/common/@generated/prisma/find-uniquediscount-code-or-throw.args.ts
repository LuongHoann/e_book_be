import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { discount_codeWhereUniqueInput } from '../discount-code/discount-code-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquediscountCodeOrThrowArgs {

    @Field(() => discount_codeWhereUniqueInput, {nullable:false})
    @Type(() => discount_codeWhereUniqueInput)
    where!: discount_codeWhereUniqueInput;
}
