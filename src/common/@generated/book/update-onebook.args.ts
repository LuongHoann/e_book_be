import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { bookUpdateInput } from './book-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';

@ArgsType()
export class UpdateOnebookArgs {

    @Field(() => bookUpdateInput, {nullable:false})
    @Type(() => bookUpdateInput)
    data!: bookUpdateInput;

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;
}
