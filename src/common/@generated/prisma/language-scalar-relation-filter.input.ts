import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languageWhereInput } from '../language/language-where.input';

@InputType()
export class LanguageScalarRelationFilter {

    @Field(() => languageWhereInput, {nullable:true})
    is?: languageWhereInput;

    @Field(() => languageWhereInput, {nullable:true})
    isNot?: languageWhereInput;
}
