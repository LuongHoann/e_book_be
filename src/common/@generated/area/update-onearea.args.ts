import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areaUpdateInput } from './area-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { areaWhereUniqueInput } from './area-where-unique.input';

@ArgsType()
export class UpdateOneareaArgs {

    @Field(() => areaUpdateInput, {nullable:false})
    @Type(() => areaUpdateInput)
    data!: areaUpdateInput;

    @Field(() => areaWhereUniqueInput, {nullable:false})
    @Type(() => areaWhereUniqueInput)
    where!: Prisma.AtLeast<areaWhereUniqueInput, 'area_name'>;
}
