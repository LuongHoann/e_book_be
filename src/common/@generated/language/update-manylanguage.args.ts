import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languageUpdateManyMutationInput } from './language-update-many-mutation.input';
import { Type } from 'class-transformer';
import { languageWhereInput } from './language-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManylanguageArgs {

    @Field(() => languageUpdateManyMutationInput, {nullable:false})
    @Type(() => languageUpdateManyMutationInput)
    data!: languageUpdateManyMutationInput;

    @Field(() => languageWhereInput, {nullable:true})
    @Type(() => languageWhereInput)
    where?: languageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
