import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { areaWhereInput } from '../area/area-where.input';

@InputType()
export class AreaNullableScalarRelationFilter {

    @Field(() => areaWhereInput, {nullable:true})
    is?: areaWhereInput;

    @Field(() => areaWhereInput, {nullable:true})
    isNot?: areaWhereInput;
}
