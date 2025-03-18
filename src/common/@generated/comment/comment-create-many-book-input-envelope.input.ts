import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { commentCreateManyBookInput } from './comment-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class commentCreateManyBookInputEnvelope {

    @Field(() => [commentCreateManyBookInput], {nullable:false})
    @Type(() => commentCreateManyBookInput)
    data!: Array<commentCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
