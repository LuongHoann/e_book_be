import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AreaMaxAggregate {

    @Field(() => String, {nullable:true})
    area_name?: string;
}
