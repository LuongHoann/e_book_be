import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateInput } from './book-create.input';
import { bookUpdateInput } from './book-update.input';

@ArgsType()
export class UpsertOnebookArgs {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateInput, {nullable:false})
    @Type(() => bookCreateInput)
    create!: bookCreateInput;

    @Field(() => bookUpdateInput, {nullable:false})
    @Type(() => bookUpdateInput)
    update!: bookUpdateInput;
}
