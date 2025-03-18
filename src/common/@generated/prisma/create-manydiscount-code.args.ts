import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { discount_codeCreateManyInput } from '../discount-code/discount-code-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydiscountCodeArgs {

    @Field(() => [discount_codeCreateManyInput], {nullable:false})
    @Type(() => discount_codeCreateManyInput)
    data!: Array<discount_codeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
