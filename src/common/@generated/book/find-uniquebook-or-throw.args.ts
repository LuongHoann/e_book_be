import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquebookOrThrowArgs {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;
}
