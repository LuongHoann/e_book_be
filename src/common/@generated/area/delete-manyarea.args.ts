import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areaWhereInput } from './area-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyareaArgs {

    @Field(() => areaWhereInput, {nullable:true})
    @Type(() => areaWhereInput)
    where?: areaWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
