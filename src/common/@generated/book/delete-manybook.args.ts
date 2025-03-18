import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManybookArgs {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
