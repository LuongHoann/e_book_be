import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reading_historyScalarWhereInput } from './reading-history-scalar-where.input';
import { Type } from 'class-transformer';
import { reading_historyUpdateManyMutationInput } from './reading-history-update-many-mutation.input';

@InputType()
export class reading_historyUpdateManyWithWhereWithoutBookInput {

    @Field(() => reading_historyScalarWhereInput, {nullable:false})
    @Type(() => reading_historyScalarWhereInput)
    where!: reading_historyScalarWhereInput;

    @Field(() => reading_historyUpdateManyMutationInput, {nullable:false})
    @Type(() => reading_historyUpdateManyMutationInput)
    data!: reading_historyUpdateManyMutationInput;
}
