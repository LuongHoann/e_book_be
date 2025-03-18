import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { license_ownershipWhereUniqueInput } from './license-ownership-where-unique.input';
import { Type } from 'class-transformer';
import { license_ownershipCreateWithoutUserInput } from './license-ownership-create-without-user.input';

@InputType()
export class license_ownershipCreateOrConnectWithoutUserInput {

    @Field(() => license_ownershipWhereUniqueInput, {nullable:false})
    @Type(() => license_ownershipWhereUniqueInput)
    where!: Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>;

    @Field(() => license_ownershipCreateWithoutUserInput, {nullable:false})
    @Type(() => license_ownershipCreateWithoutUserInput)
    create!: license_ownershipCreateWithoutUserInput;
}
