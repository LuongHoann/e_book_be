import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_bookWhereInput } from '../language-book/language-book-where.input';
import { Type } from 'class-transformer';
import { language_bookOrderByWithRelationInput } from '../language-book/language-book-order-by-with-relation.input';
import { language_bookWhereUniqueInput } from '../language-book/language-book-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Language_bookScalarFieldEnum } from './language-book-scalar-field.enum';

@ArgsType()
export class FindFirstlanguageBookArgs {

    @Field(() => language_bookWhereInput, {nullable:true})
    @Type(() => language_bookWhereInput)
    where?: language_bookWhereInput;

    @Field(() => [language_bookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<language_bookOrderByWithRelationInput>;

    @Field(() => language_bookWhereUniqueInput, {nullable:true})
    cursor?: language_bookWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Language_bookScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Language_bookScalarFieldEnum}`>;
}
