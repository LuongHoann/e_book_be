import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languageWhereInput } from './language-where.input';
import { Type } from 'class-transformer';
import { languageOrderByWithRelationInput } from './language-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { languageWhereUniqueInput } from './language-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LanguageScalarFieldEnum } from '../prisma/language-scalar-field.enum';

@ArgsType()
export class FindFirstlanguageOrThrowArgs {

    @Field(() => languageWhereInput, {nullable:true})
    @Type(() => languageWhereInput)
    where?: languageWhereInput;

    @Field(() => [languageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<languageOrderByWithRelationInput>;

    @Field(() => languageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<languageWhereUniqueInput, 'id' | 'language_code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LanguageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LanguageScalarFieldEnum}`>;
}
