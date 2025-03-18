import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoryWhereInput } from '../category/category-where.input';

@InputType()
export class CategoryScalarRelationFilter {

    @Field(() => categoryWhereInput, {nullable:true})
    is?: categoryWhereInput;

    @Field(() => categoryWhereInput, {nullable:true})
    isNot?: categoryWhereInput;
}
