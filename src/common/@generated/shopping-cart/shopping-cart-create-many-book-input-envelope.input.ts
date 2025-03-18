import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { shopping_cartCreateManyBookInput } from './shopping-cart-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class shopping_cartCreateManyBookInputEnvelope {

    @Field(() => [shopping_cartCreateManyBookInput], {nullable:false})
    @Type(() => shopping_cartCreateManyBookInput)
    data!: Array<shopping_cartCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
