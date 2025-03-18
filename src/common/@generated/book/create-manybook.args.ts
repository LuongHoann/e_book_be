import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { bookCreateManyInput } from './book-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManybookArgs {

    @Field(() => [bookCreateManyInput], {nullable:false})
    @Type(() => bookCreateManyInput)
    data!: Array<bookCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
