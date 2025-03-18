import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from '../user/user-where.input';

@InputType()
export class UserScalarRelationFilter {

    @Field(() => userWhereInput, {nullable:true})
    is?: userWhereInput;

    @Field(() => userWhereInput, {nullable:true})
    isNot?: userWhereInput;
}
