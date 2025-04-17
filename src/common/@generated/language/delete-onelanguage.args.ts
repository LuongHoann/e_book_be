import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { languageWhereUniqueInput } from './language-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnelanguageArgs {

    @Field(() => languageWhereUniqueInput, {nullable:false})
    @Type(() => languageWhereUniqueInput)
    where!: Prisma.AtLeast<languageWhereUniqueInput, 'id' | 'code'>;
}
