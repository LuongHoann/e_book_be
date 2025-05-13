import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { book } from '../book/book.model';
import { license_type } from '../license-type/license-type.model';
import { license_ownership } from '../license-ownership/license-ownership.model';
import { LicenseCount } from '../prisma/license-count.output';

@ObjectType()
export class license {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    book_id!: string | null;

    @Field(() => String, {nullable:true})
    license_type_id!: string | null;

    @Field(() => book, {nullable:true})
    book?: book | null;

    @Field(() => license_type, {nullable:true})
    license_type?: license_type | null;

    @Field(() => [license_ownership], {nullable:true})
    license_ownership?: Array<license_ownership>;

    @Field(() => LicenseCount, {nullable:false})
    _count?: LicenseCount;
}
