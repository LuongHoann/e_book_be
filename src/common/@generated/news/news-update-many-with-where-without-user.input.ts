import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { newsScalarWhereInput } from './news-scalar-where.input';
import { Type } from 'class-transformer';
import { newsUpdateManyMutationInput } from './news-update-many-mutation.input';

@InputType()
export class newsUpdateManyWithWhereWithoutUserInput {

    @Field(() => newsScalarWhereInput, {nullable:false})
    @Type(() => newsScalarWhereInput)
    where!: newsScalarWhereInput;

    @Field(() => newsUpdateManyMutationInput, {nullable:false})
    @Type(() => newsUpdateManyMutationInput)
    data!: newsUpdateManyMutationInput;
}
