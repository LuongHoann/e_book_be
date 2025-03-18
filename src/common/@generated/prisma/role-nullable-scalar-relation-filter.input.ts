import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roleWhereInput } from '../role/role-where.input';

@InputType()
export class RoleNullableScalarRelationFilter {

    @Field(() => roleWhereInput, {nullable:true})
    is?: roleWhereInput;

    @Field(() => roleWhereInput, {nullable:true})
    isNot?: roleWhereInput;
}
