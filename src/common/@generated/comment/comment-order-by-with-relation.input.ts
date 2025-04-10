import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { bookOrderByWithRelationInput } from '../book/book-order-by-with-relation.input';
import { userOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class commentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    book_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => bookOrderByWithRelationInput, {nullable:true})
    book?: bookOrderByWithRelationInput;

    @Field(() => userOrderByWithRelationInput, {nullable:true})
    user?: userOrderByWithRelationInput;
}
