import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookScalarWhereInput } from './category-book-scalar-where.input';
import { Type } from 'class-transformer';
import { category_bookUncheckedUpdateManyWithoutCategoryInput } from './category-book-unchecked-update-many-without-category.input';

@InputType()
export class category_bookUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => category_bookScalarWhereInput, {nullable:false})
    @Type(() => category_bookScalarWhereInput)
    where!: category_bookScalarWhereInput;

    @Field(() => category_bookUncheckedUpdateManyWithoutCategoryInput, {nullable:false})
    @Type(() => category_bookUncheckedUpdateManyWithoutCategoryInput)
    data!: category_bookUncheckedUpdateManyWithoutCategoryInput;
}
