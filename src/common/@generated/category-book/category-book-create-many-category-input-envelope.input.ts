import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookCreateManyCategoryInput } from './category-book-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class category_bookCreateManyCategoryInputEnvelope {

    @Field(() => [category_bookCreateManyCategoryInput], {nullable:false})
    @Type(() => category_bookCreateManyCategoryInput)
    data!: Array<category_bookCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
