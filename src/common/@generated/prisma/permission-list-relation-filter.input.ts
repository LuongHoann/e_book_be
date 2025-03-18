import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionWhereInput } from '../permission/permission-where.input';

@InputType()
export class PermissionListRelationFilter {

    @Field(() => permissionWhereInput, {nullable:true})
    every?: permissionWhereInput;

    @Field(() => permissionWhereInput, {nullable:true})
    some?: permissionWhereInput;

    @Field(() => permissionWhereInput, {nullable:true})
    none?: permissionWhereInput;
}
