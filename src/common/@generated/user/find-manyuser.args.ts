import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { userOrderByWithRelationInput } from './user-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserScalarFieldEnum } from '../prisma/user-scalar-field.enum';

@ArgsType()
export class FindManyuserArgs {

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;

    @Field(() => [userOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<userOrderByWithRelationInput>;

    @Field(() => userWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}
