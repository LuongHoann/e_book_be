import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutReading_historyInput } from './book-create-without-reading-history.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutReading_historyInput } from './book-create-or-connect-without-reading-history.input';
import { bookUpsertWithoutReading_historyInput } from './book-upsert-without-reading-history.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { bookUpdateToOneWithWhereWithoutReading_historyInput } from './book-update-to-one-with-where-without-reading-history.input';

@InputType()
export class bookUpdateOneRequiredWithoutReading_historyNestedInput {

    @Field(() => bookCreateWithoutReading_historyInput, {nullable:true})
    @Type(() => bookCreateWithoutReading_historyInput)
    create?: bookCreateWithoutReading_historyInput;

    @Field(() => bookCreateOrConnectWithoutReading_historyInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutReading_historyInput)
    connectOrCreate?: bookCreateOrConnectWithoutReading_historyInput;

    @Field(() => bookUpsertWithoutReading_historyInput, {nullable:true})
    @Type(() => bookUpsertWithoutReading_historyInput)
    upsert?: bookUpsertWithoutReading_historyInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookUpdateToOneWithWhereWithoutReading_historyInput, {nullable:true})
    @Type(() => bookUpdateToOneWithWhereWithoutReading_historyInput)
    update?: bookUpdateToOneWithWhereWithoutReading_historyInput;
}
