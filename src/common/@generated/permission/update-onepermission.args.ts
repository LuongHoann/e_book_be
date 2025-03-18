import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionUpdateInput } from './permission-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { permissionWhereUniqueInput } from './permission-where-unique.input';

@ArgsType()
export class UpdateOnepermissionArgs {

    @Field(() => permissionUpdateInput, {nullable:false})
    @Type(() => permissionUpdateInput)
    data!: permissionUpdateInput;

    @Field(() => permissionWhereUniqueInput, {nullable:false})
    @Type(() => permissionWhereUniqueInput)
    where!: Prisma.AtLeast<permissionWhereUniqueInput, 'role_id_url'>;
}
