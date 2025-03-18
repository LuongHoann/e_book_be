import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class areaUncheckedCreateWithoutDiscount_codeInput {

    @Field(() => String, {nullable:false})
    area_name!: string;
}
