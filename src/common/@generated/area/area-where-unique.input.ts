import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { areaWhereInput } from './area-where.input';
import { Discount_codeListRelationFilter } from '../prisma/discount-code-list-relation-filter.input';

@InputType()
export class areaWhereUniqueInput {

    @Field(() => String, {nullable:true})
    area_name?: string;

    @Field(() => [areaWhereInput], {nullable:true})
    AND?: Array<areaWhereInput>;

    @Field(() => [areaWhereInput], {nullable:true})
    OR?: Array<areaWhereInput>;

    @Field(() => [areaWhereInput], {nullable:true})
    NOT?: Array<areaWhereInput>;

    @Field(() => Discount_codeListRelationFilter, {nullable:true})
    discount_code?: Discount_codeListRelationFilter;
}
