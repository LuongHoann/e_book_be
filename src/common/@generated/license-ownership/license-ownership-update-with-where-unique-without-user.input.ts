import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { license_ownershipWhereUniqueInput } from './license-ownership-where-unique.input';
import { Type } from 'class-transformer';
import { license_ownershipUpdateWithoutUserInput } from './license-ownership-update-without-user.input';

@InputType()
export class license_ownershipUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => license_ownershipWhereUniqueInput, {nullable:false})
    @Type(() => license_ownershipWhereUniqueInput)
    where!: Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>;

    @Field(() => license_ownershipUpdateWithoutUserInput, {nullable:false})
    @Type(() => license_ownershipUpdateWithoutUserInput)
    data!: license_ownershipUpdateWithoutUserInput;
}
