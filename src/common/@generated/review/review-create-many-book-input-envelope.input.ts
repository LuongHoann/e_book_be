import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reviewCreateManyBookInput } from './review-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class reviewCreateManyBookInputEnvelope {

    @Field(() => [reviewCreateManyBookInput], {nullable:false})
    @Type(() => reviewCreateManyBookInput)
    data!: Array<reviewCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
