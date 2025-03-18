import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { favouriteWhereUniqueInput } from './favourite-where-unique.input';
import { Type } from 'class-transformer';
import { favouriteCreateWithoutUserInput } from './favourite-create-without-user.input';

@InputType()
export class favouriteCreateOrConnectWithoutUserInput {

    @Field(() => favouriteWhereUniqueInput, {nullable:false})
    @Type(() => favouriteWhereUniqueInput)
    where!: Prisma.AtLeast<favouriteWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => favouriteCreateWithoutUserInput, {nullable:false})
    @Type(() => favouriteCreateWithoutUserInput)
    create!: favouriteCreateWithoutUserInput;
}
