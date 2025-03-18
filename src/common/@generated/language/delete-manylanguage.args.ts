import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languageWhereInput } from './language-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManylanguageArgs {

    @Field(() => languageWhereInput, {nullable:true})
    @Type(() => languageWhereInput)
    where?: languageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
