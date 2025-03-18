import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { bookCreateInput } from './book-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnebookArgs {

    @Field(() => bookCreateInput, {nullable:false})
    @Type(() => bookCreateInput)
    data!: bookCreateInput;
}
