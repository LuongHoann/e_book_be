import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class license_ownershipMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    license_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    download_count?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expiration_date?: `${SortOrder}`;
}
