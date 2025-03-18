import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleWhereInput } from '../role/role-where.input';

@InputType()
export class RoleListRelationFilter {

    @Field(() => roleWhereInput, {nullable:true})
    every?: roleWhereInput;

    @Field(() => roleWhereInput, {nullable:true})
    some?: roleWhereInput;

    @Field(() => roleWhereInput, {nullable:true})
    none?: roleWhereInput;
}
