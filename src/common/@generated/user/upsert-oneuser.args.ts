import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userCreateInput } from './user-create.input';
import { userUpdateInput } from './user-update.input';

@ArgsType()
export class UpsertOneuserArgs {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userCreateInput, {nullable:false})
    @Type(() => userCreateInput)
    create!: userCreateInput;

    @Field(() => userUpdateInput, {nullable:false})
    @Type(() => userUpdateInput)
    update!: userUpdateInput;
}
