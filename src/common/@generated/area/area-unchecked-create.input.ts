import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeUncheckedCreateNestedManyWithoutAreaInput } from '../discount-code/discount-code-unchecked-create-nested-many-without-area.input';
import { Type } from 'class-transformer';

@InputType()
export class areaUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => discount_codeUncheckedCreateNestedManyWithoutAreaInput, {nullable:true})
    @Type(() => discount_codeUncheckedCreateNestedManyWithoutAreaInput)
    discount_code?: discount_codeUncheckedCreateNestedManyWithoutAreaInput;
}
