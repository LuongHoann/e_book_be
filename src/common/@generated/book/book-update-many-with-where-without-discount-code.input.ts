import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookScalarWhereInput } from './book-scalar-where.input';
import { Type } from 'class-transformer';
import { bookUpdateManyMutationInput } from './book-update-many-mutation.input';

@InputType()
export class bookUpdateManyWithWhereWithoutDiscount_codeInput {

    @Field(() => bookScalarWhereInput, {nullable:false})
    @Type(() => bookScalarWhereInput)
    where!: bookScalarWhereInput;

    @Field(() => bookUpdateManyMutationInput, {nullable:false})
    @Type(() => bookUpdateManyMutationInput)
    data!: bookUpdateManyMutationInput;
}
