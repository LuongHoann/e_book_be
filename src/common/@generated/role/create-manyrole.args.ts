import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roleCreateManyInput } from './role-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyroleArgs {

    @Field(() => [roleCreateManyInput], {nullable:false})
    @Type(() => roleCreateManyInput)
    data!: Array<roleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
