import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateWithoutReading_historyInput } from './book-update-without-reading-history.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutReading_historyInput } from './book-create-without-reading-history.input';
import { bookWhereInput } from './book-where.input';

@InputType()
export class bookUpsertWithoutReading_historyInput {

    @Field(() => bookUpdateWithoutReading_historyInput, {nullable:false})
    @Type(() => bookUpdateWithoutReading_historyInput)
    update!: bookUpdateWithoutReading_historyInput;

    @Field(() => bookCreateWithoutReading_historyInput, {nullable:false})
    @Type(() => bookCreateWithoutReading_historyInput)
    create!: bookCreateWithoutReading_historyInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;
}
