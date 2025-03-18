import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { newsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { newsUpdateWithoutUserInput } from './news-update-without-user.input';
import { newsCreateWithoutUserInput } from './news-create-without-user.input';

@InputType()
export class newsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => newsWhereUniqueInput, {nullable:false})
    @Type(() => newsWhereUniqueInput)
    where!: Prisma.AtLeast<newsWhereUniqueInput, 'id'>;

    @Field(() => newsUpdateWithoutUserInput, {nullable:false})
    @Type(() => newsUpdateWithoutUserInput)
    update!: newsUpdateWithoutUserInput;

    @Field(() => newsCreateWithoutUserInput, {nullable:false})
    @Type(() => newsCreateWithoutUserInput)
    create!: newsCreateWithoutUserInput;
}
