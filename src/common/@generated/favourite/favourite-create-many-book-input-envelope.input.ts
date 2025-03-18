import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { favouriteCreateManyBookInput } from './favourite-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class favouriteCreateManyBookInputEnvelope {

    @Field(() => [favouriteCreateManyBookInput], {nullable:false})
    @Type(() => favouriteCreateManyBookInput)
    data!: Array<favouriteCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
