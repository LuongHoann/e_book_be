import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { roleCreateInput } from './role-create.input';
import { roleUpdateInput } from './role-update.input';

@ArgsType()
export class UpsertOneroleArgs {

    @Field(() => roleWhereUniqueInput, {nullable:false})
    @Type(() => roleWhereUniqueInput)
    where!: Prisma.AtLeast<roleWhereUniqueInput, 'id'>;

    @Field(() => roleCreateInput, {nullable:false})
    @Type(() => roleCreateInput)
    create!: roleCreateInput;

    @Field(() => roleUpdateInput, {nullable:false})
    @Type(() => roleUpdateInput)
    update!: roleUpdateInput;
}
