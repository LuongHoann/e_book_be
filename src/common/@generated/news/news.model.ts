import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { user } from '../user/user.model';

@ObjectType()
export class news {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    publish_date!: Date | null;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => user, {nullable:false})
    user?: user;
}
