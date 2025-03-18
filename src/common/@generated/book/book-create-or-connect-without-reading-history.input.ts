import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutReading_historyInput } from './book-create-without-reading-history.input';

@InputType()
export class bookCreateOrConnectWithoutReading_historyInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateWithoutReading_historyInput, {nullable:false})
    @Type(() => bookCreateWithoutReading_historyInput)
    create!: bookCreateWithoutReading_historyInput;
}
