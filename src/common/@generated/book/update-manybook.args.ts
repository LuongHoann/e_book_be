import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { bookUpdateManyMutationInput } from './book-update-many-mutation.input';
import { Type } from 'class-transformer';
import { bookWhereInput } from './book-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManybookArgs {

    @Field(() => bookUpdateManyMutationInput, {nullable:false})
    @Type(() => bookUpdateManyMutationInput)
    data!: bookUpdateManyMutationInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
