import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionCreateManyInput } from './permission-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManypermissionArgs {

    @Field(() => [permissionCreateManyInput], {nullable:false})
    @Type(() => permissionCreateManyInput)
    data!: Array<permissionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
