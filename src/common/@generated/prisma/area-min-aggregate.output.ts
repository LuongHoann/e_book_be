import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AreaMinAggregate {

    @Field(() => String, {nullable:true})
    area_name?: string;
}
