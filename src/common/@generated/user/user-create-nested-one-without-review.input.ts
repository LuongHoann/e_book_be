import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutReviewInput } from './user-create-without-review.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutReviewInput } from './user-create-or-connect-without-review.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class userCreateNestedOneWithoutReviewInput {

    @Field(() => userCreateWithoutReviewInput, {nullable:true})
    @Type(() => userCreateWithoutReviewInput)
    create?: userCreateWithoutReviewInput;

    @Field(() => userCreateOrConnectWithoutReviewInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutReviewInput)
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;
}
