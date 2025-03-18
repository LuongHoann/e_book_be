import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { license_ownershipCreateManyInput } from '../license-ownership/license-ownership-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManylicenseOwnershipArgs {

    @Field(() => [license_ownershipCreateManyInput], {nullable:false})
    @Type(() => license_ownershipCreateManyInput)
    data!: Array<license_ownershipCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
