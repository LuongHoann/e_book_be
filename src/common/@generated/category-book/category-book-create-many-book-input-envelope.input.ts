import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookCreateManyBookInput } from './category-book-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class category_bookCreateManyBookInputEnvelope {

    @Field(() => [category_bookCreateManyBookInput], {nullable:false})
    @Type(() => category_bookCreateManyBookInput)
    data!: Array<category_bookCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
