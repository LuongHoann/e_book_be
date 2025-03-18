import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reading_historyCreateManyUserInput } from './reading-history-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class reading_historyCreateManyUserInputEnvelope {

    @Field(() => [reading_historyCreateManyUserInput], {nullable:false})
    @Type(() => reading_historyCreateManyUserInput)
    data!: Array<reading_historyCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
