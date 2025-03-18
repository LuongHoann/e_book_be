import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_bookWhereInput } from '../language-book/language-book-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManylanguageBookArgs {

    @Field(() => language_bookWhereInput, {nullable:true})
    @Type(() => language_bookWhereInput)
    where?: language_bookWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
