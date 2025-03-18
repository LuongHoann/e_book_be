import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { permissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { permissionCreateInput } from './permission-create.input';
import { permissionUpdateInput } from './permission-update.input';

@ArgsType()
export class UpsertOnepermissionArgs {

    @Field(() => permissionWhereUniqueInput, {nullable:false})
    @Type(() => permissionWhereUniqueInput)
    where!: Prisma.AtLeast<permissionWhereUniqueInput, 'role_id_url'>;

    @Field(() => permissionCreateInput, {nullable:false})
    @Type(() => permissionCreateInput)
    create!: permissionCreateInput;

    @Field(() => permissionUpdateInput, {nullable:false})
    @Type(() => permissionUpdateInput)
    update!: permissionUpdateInput;
}
