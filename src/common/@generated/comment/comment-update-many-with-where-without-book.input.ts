import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { commentScalarWhereInput } from './comment-scalar-where.input';
import { Type } from 'class-transformer';
import { commentUpdateManyMutationInput } from './comment-update-many-mutation.input';

@InputType()
export class commentUpdateManyWithWhereWithoutBookInput {

    @Field(() => commentScalarWhereInput, {nullable:false})
    @Type(() => commentScalarWhereInput)
    where!: commentScalarWhereInput;

    @Field(() => commentUpdateManyMutationInput, {nullable:false})
    @Type(() => commentUpdateManyMutationInput)
    data!: commentUpdateManyMutationInput;
}
