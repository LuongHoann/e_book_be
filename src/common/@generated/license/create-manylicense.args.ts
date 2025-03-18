import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { licenseCreateManyInput } from './license-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManylicenseArgs {

    @Field(() => [licenseCreateManyInput], {nullable:false})
    @Type(() => licenseCreateManyInput)
    data!: Array<licenseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
