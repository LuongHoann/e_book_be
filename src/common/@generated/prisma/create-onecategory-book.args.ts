import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { category_bookCreateInput } from '../category-book/category-book-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecategoryBookArgs {

    @Field(() => category_bookCreateInput, {nullable:false})
    @Type(() => category_bookCreateInput)
    data!: category_bookCreateInput;
}
