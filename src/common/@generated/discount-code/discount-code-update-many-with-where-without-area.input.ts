import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeScalarWhereInput } from './discount-code-scalar-where.input';
import { Type } from 'class-transformer';
import { discount_codeUpdateManyMutationInput } from './discount-code-update-many-mutation.input';

@InputType()
export class discount_codeUpdateManyWithWhereWithoutAreaInput {

    @Field(() => discount_codeScalarWhereInput, {nullable:false})
    @Type(() => discount_codeScalarWhereInput)
    where!: discount_codeScalarWhereInput;

    @Field(() => discount_codeUpdateManyMutationInput, {nullable:false})
    @Type(() => discount_codeUpdateManyMutationInput)
    data!: discount_codeUpdateManyMutationInput;
}
