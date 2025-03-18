import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { category_bookCreateManyInput } from '../category-book/category-book-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycategoryBookArgs {

    @Field(() => [category_bookCreateManyInput], {nullable:false})
    @Type(() => category_bookCreateManyInput)
    data!: Array<category_bookCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
