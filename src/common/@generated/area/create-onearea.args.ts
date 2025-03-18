import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areaCreateInput } from './area-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneareaArgs {

    @Field(() => areaCreateInput, {nullable:false})
    @Type(() => areaCreateInput)
    data!: areaCreateInput;
}
