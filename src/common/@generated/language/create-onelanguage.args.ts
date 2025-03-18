import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languageCreateInput } from './language-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelanguageArgs {

    @Field(() => languageCreateInput, {nullable:false})
    @Type(() => languageCreateInput)
    data!: languageCreateInput;
}
