import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reviewScalarWhereInput } from './review-scalar-where.input';
import { Type } from 'class-transformer';
import { reviewUpdateManyMutationInput } from './review-update-many-mutation.input';

@InputType()
export class reviewUpdateManyWithWhereWithoutBookInput {

    @Field(() => reviewScalarWhereInput, {nullable:false})
    @Type(() => reviewScalarWhereInput)
    where!: reviewScalarWhereInput;

    @Field(() => reviewUpdateManyMutationInput, {nullable:false})
    @Type(() => reviewUpdateManyMutationInput)
    data!: reviewUpdateManyMutationInput;
}
