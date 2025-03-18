import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_bookUncheckedUpdateManyInput } from '../language-book/language-book-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { language_bookWhereInput } from '../language-book/language-book-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManylanguageBookArgs {

    @Field(() => language_bookUncheckedUpdateManyInput, {nullable:false})
    @Type(() => language_bookUncheckedUpdateManyInput)
    data!: language_bookUncheckedUpdateManyInput;

    @Field(() => language_bookWhereInput, {nullable:true})
    @Type(() => language_bookWhereInput)
    where?: language_bookWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
