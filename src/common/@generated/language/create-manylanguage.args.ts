import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languageCreateManyInput } from './language-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManylanguageArgs {

    @Field(() => [languageCreateManyInput], {nullable:false})
    @Type(() => languageCreateManyInput)
    data!: Array<languageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
