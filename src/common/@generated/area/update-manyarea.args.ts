import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areaUpdateManyMutationInput } from './area-update-many-mutation.input';
import { Type } from 'class-transformer';
import { areaWhereInput } from './area-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyareaArgs {

    @Field(() => areaUpdateManyMutationInput, {nullable:false})
    @Type(() => areaUpdateManyMutationInput)
    data!: areaUpdateManyMutationInput;

    @Field(() => areaWhereInput, {nullable:true})
    @Type(() => areaWhereInput)
    where?: areaWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
