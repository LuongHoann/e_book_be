import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateNestedOneWithoutNewsInput } from '../user/user-create-nested-one-without-news.input';

@InputType()
export class newsCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    publish_date?: Date | string;

    @Field(() => userCreateNestedOneWithoutNewsInput, {nullable:false})
    user!: userCreateNestedOneWithoutNewsInput;
}
