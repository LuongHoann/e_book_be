import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { bookOrderByWithRelationInput } from '../book/book-order-by-with-relation.input';
import { userOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class reviewOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rating?: `${SortOrder}`;

    @Field(() => bookOrderByWithRelationInput, {nullable:true})
    book?: bookOrderByWithRelationInput;

    @Field(() => userOrderByWithRelationInput, {nullable:true})
    user?: userOrderByWithRelationInput;
}
