import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoryUpdateManyMutationInput } from './category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { categoryWhereInput } from './category-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManycategoryArgs {

    @Field(() => categoryUpdateManyMutationInput, {nullable:false})
    @Type(() => categoryUpdateManyMutationInput)
    data!: categoryUpdateManyMutationInput;

    @Field(() => categoryWhereInput, {nullable:true})
    @Type(() => categoryWhereInput)
    where?: categoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
