import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_typeCreateManyInput } from '../license-type/license-type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManylicenseTypeArgs {

    @Field(() => [license_typeCreateManyInput], {nullable:false})
    @Type(() => license_typeCreateManyInput)
    data!: Array<license_typeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
