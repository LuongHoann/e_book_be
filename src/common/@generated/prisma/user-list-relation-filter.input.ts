import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from '../user/user-where.input';

@InputType()
export class UserListRelationFilter {

    @Field(() => userWhereInput, {nullable:true})
    every?: userWhereInput;

    @Field(() => userWhereInput, {nullable:true})
    some?: userWhereInput;

    @Field(() => userWhereInput, {nullable:true})
    none?: userWhereInput;
}
