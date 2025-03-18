import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManycategoryArgs {

    @Field(() => categoryWhereInput, {nullable:true})
    @Type(() => categoryWhereInput)
    where?: categoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
