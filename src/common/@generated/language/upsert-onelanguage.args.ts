import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { languageWhereUniqueInput } from './language-where-unique.input';
import { Type } from 'class-transformer';
import { languageCreateInput } from './language-create.input';
import { languageUpdateInput } from './language-update.input';

@ArgsType()
export class UpsertOnelanguageArgs {

    @Field(() => languageWhereUniqueInput, {nullable:false})
    @Type(() => languageWhereUniqueInput)
    where!: Prisma.AtLeast<languageWhereUniqueInput, 'id' | 'code'>;

    @Field(() => languageCreateInput, {nullable:false})
    @Type(() => languageCreateInput)
    create!: languageCreateInput;

    @Field(() => languageUpdateInput, {nullable:false})
    @Type(() => languageUpdateInput)
    update!: languageUpdateInput;
}
