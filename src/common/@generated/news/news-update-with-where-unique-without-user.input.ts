import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { newsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { newsUpdateWithoutUserInput } from './news-update-without-user.input';

@InputType()
export class newsUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => newsWhereUniqueInput, {nullable:false})
    @Type(() => newsWhereUniqueInput)
    where!: Prisma.AtLeast<newsWhereUniqueInput, 'id'>;

    @Field(() => newsUpdateWithoutUserInput, {nullable:false})
    @Type(() => newsUpdateWithoutUserInput)
    data!: newsUpdateWithoutUserInput;
}
