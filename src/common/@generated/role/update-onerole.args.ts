import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roleUpdateInput } from './role-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { roleWhereUniqueInput } from './role-where-unique.input';

@ArgsType()
export class UpdateOneroleArgs {

    @Field(() => roleUpdateInput, {nullable:false})
    @Type(() => roleUpdateInput)
    data!: roleUpdateInput;

    @Field(() => roleWhereUniqueInput, {nullable:false})
    @Type(() => roleWhereUniqueInput)
    where!: Prisma.AtLeast<roleWhereUniqueInput, 'id'>;
}
