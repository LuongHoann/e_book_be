import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { permissionOrderByRelationAggregateInput } from '../permission/permission-order-by-relation-aggregate.input';
import { userOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';

@InputType()
export class roleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role_name?: `${SortOrder}`;

    @Field(() => permissionOrderByRelationAggregateInput, {nullable:true})
    permission?: permissionOrderByRelationAggregateInput;

    @Field(() => userOrderByRelationAggregateInput, {nullable:true})
    user_user_roleTorole?: userOrderByRelationAggregateInput;
}
