import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class permissionCreateWithoutRoleInput {

    @Field(() => String, {nullable:false})
    url!: string;
}
