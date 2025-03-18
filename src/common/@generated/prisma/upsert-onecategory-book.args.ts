import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { category_bookWhereUniqueInput } from '../category-book/category-book-where-unique.input';
import { Type } from 'class-transformer';
import { category_bookCreateInput } from '../category-book/category-book-create.input';
import { category_bookUpdateInput } from '../category-book/category-book-update.input';

@ArgsType()
export class UpsertOnecategoryBookArgs {

    @Field(() => category_bookWhereUniqueInput, {nullable:false})
    @Type(() => category_bookWhereUniqueInput)
    where!: category_bookWhereUniqueInput;

    @Field(() => category_bookCreateInput, {nullable:false})
    @Type(() => category_bookCreateInput)
    create!: category_bookCreateInput;

    @Field(() => category_bookUpdateInput, {nullable:false})
    @Type(() => category_bookUpdateInput)
    update!: category_bookUpdateInput;
}
