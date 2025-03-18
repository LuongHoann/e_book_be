import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { areaWhereUniqueInput } from './area-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueareaArgs {

    @Field(() => areaWhereUniqueInput, {nullable:false})
    @Type(() => areaWhereUniqueInput)
    where!: Prisma.AtLeast<areaWhereUniqueInput, 'area_name'>;
}
