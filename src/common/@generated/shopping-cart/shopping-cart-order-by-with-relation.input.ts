import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { bookOrderByWithRelationInput } from '../book/book-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { userOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class shopping_cartOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => bookOrderByWithRelationInput, {nullable:true})
    @Type(() => bookOrderByWithRelationInput)
    book?: bookOrderByWithRelationInput;

    @Field(() => userOrderByWithRelationInput, {nullable:true})
    user?: userOrderByWithRelationInput;
}
