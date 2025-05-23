import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class areaUncheckedCreateWithoutDiscount_codeInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    name!: string;
}
