import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { roleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';

@InputType()
export class permissionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    role_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => roleOrderByWithRelationInput, {nullable:true})
    role?: roleOrderByWithRelationInput;
}
