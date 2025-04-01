import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeCreateNestedManyWithoutAreaInput } from '../discount-code/discount-code-create-nested-many-without-area.input';
import { Type } from 'class-transformer';

@InputType()
export class areaCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => discount_codeCreateNestedManyWithoutAreaInput, {nullable:true})
    @Type(() => discount_codeCreateNestedManyWithoutAreaInput)
    discount_code?: discount_codeCreateNestedManyWithoutAreaInput;
}
