import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutReading_historyInput } from './book-create-without-reading-history.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutReading_historyInput } from './book-create-or-connect-without-reading-history.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class bookCreateNestedOneWithoutReading_historyInput {

    @Field(() => bookCreateWithoutReading_historyInput, {nullable:true})
    @Type(() => bookCreateWithoutReading_historyInput)
    create?: bookCreateWithoutReading_historyInput;

    @Field(() => bookCreateOrConnectWithoutReading_historyInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutReading_historyInput)
    connectOrCreate?: bookCreateOrConnectWithoutReading_historyInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;
}
