import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class License_typeCount {

    @Field(() => Int, {nullable:false})
    license!: number;
}
