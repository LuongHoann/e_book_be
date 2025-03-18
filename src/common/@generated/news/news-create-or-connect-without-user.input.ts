import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { newsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { newsCreateWithoutUserInput } from './news-create-without-user.input';

@InputType()
export class newsCreateOrConnectWithoutUserInput {

    @Field(() => newsWhereUniqueInput, {nullable:false})
    @Type(() => newsWhereUniqueInput)
    where!: Prisma.AtLeast<newsWhereUniqueInput, 'id'>;

    @Field(() => newsCreateWithoutUserInput, {nullable:false})
    @Type(() => newsCreateWithoutUserInput)
    create!: newsCreateWithoutUserInput;
}
