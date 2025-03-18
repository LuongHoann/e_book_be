import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutReading_historyInput } from './book-update-without-reading-history.input';

@InputType()
export class bookUpdateToOneWithWhereWithoutReading_historyInput {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => bookUpdateWithoutReading_historyInput, {nullable:false})
    @Type(() => bookUpdateWithoutReading_historyInput)
    data!: bookUpdateWithoutReading_historyInput;
}
