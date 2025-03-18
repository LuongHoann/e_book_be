import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { userUpdateInput } from './user-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class UpdateOneuserArgs {

    @Field(() => userUpdateInput, {nullable:false})
    @Type(() => userUpdateInput)
    data!: userUpdateInput;

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;
}
