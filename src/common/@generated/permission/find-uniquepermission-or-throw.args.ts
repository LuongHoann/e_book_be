import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { permissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepermissionOrThrowArgs {

    @Field(() => permissionWhereUniqueInput, {nullable:false})
    @Type(() => permissionWhereUniqueInput)
    where!: Prisma.AtLeast<permissionWhereUniqueInput, 'role_id_url'>;
}
