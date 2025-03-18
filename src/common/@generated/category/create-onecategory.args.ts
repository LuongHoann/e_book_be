import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoryCreateInput } from './category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecategoryArgs {

    @Field(() => categoryCreateInput, {nullable:false})
    @Type(() => categoryCreateInput)
    data!: categoryCreateInput;
}
