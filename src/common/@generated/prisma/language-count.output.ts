import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LanguageCount {

    @Field(() => Int, {nullable:false})
    language_book!: number;
}
