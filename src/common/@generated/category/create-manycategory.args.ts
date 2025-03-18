import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoryCreateManyInput } from './category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycategoryArgs {

    @Field(() => [categoryCreateManyInput], {nullable:false})
    @Type(() => categoryCreateManyInput)
    data!: Array<categoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
