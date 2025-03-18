import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { areaWhereUniqueInput } from './area-where-unique.input';
import { Type } from 'class-transformer';
import { areaCreateInput } from './area-create.input';
import { areaUpdateInput } from './area-update.input';

@ArgsType()
export class UpsertOneareaArgs {

    @Field(() => areaWhereUniqueInput, {nullable:false})
    @Type(() => areaWhereUniqueInput)
    where!: Prisma.AtLeast<areaWhereUniqueInput, 'area_name'>;

    @Field(() => areaCreateInput, {nullable:false})
    @Type(() => areaCreateInput)
    create!: areaCreateInput;

    @Field(() => areaUpdateInput, {nullable:false})
    @Type(() => areaUpdateInput)
    update!: areaUpdateInput;
}
