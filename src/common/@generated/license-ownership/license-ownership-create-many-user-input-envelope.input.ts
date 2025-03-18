import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_ownershipCreateManyUserInput } from './license-ownership-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class license_ownershipCreateManyUserInputEnvelope {

    @Field(() => [license_ownershipCreateManyUserInput], {nullable:false})
    @Type(() => license_ownershipCreateManyUserInput)
    data!: Array<license_ownershipCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
