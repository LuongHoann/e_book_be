import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reading_historyCreateManyBookInput } from './reading-history-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class reading_historyCreateManyBookInputEnvelope {

    @Field(() => [reading_historyCreateManyBookInput], {nullable:false})
    @Type(() => reading_historyCreateManyBookInput)
    data!: Array<reading_historyCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
