import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areaCreateManyInput } from './area-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyareaArgs {

    @Field(() => [areaCreateManyInput], {nullable:false})
    @Type(() => areaCreateManyInput)
    data!: Array<areaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
