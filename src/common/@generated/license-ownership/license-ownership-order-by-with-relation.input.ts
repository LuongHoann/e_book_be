import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { licenseOrderByWithRelationInput } from '../license/license-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { userOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class license_ownershipOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    license_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    download_count?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    expiration_date?: `${SortOrder}`;

    @Field(() => licenseOrderByWithRelationInput, {nullable:true})
    @Type(() => licenseOrderByWithRelationInput)
    license?: licenseOrderByWithRelationInput;

    @Field(() => userOrderByWithRelationInput, {nullable:true})
    user?: userOrderByWithRelationInput;
}
