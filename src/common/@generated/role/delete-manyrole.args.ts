import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyroleArgs {

    @Field(() => roleWhereInput, {nullable:true})
    @Type(() => roleWhereInput)
    where?: roleWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
