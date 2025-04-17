import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languageUpdateInput } from './language-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { languageWhereUniqueInput } from './language-where-unique.input';

@ArgsType()
export class UpdateOnelanguageArgs {

    @Field(() => languageUpdateInput, {nullable:false})
    @Type(() => languageUpdateInput)
    data!: languageUpdateInput;

    @Field(() => languageWhereUniqueInput, {nullable:false})
    @Type(() => languageWhereUniqueInput)
    where!: Prisma.AtLeast<languageWhereUniqueInput, 'id' | 'code'>;
}
