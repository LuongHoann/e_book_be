import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionWhereInput } from './permission-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManypermissionArgs {

    @Field(() => permissionWhereInput, {nullable:true})
    @Type(() => permissionWhereInput)
    where?: permissionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
