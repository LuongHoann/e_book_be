import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateWithoutLicenseInput } from './book-update-without-license.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutLicenseInput } from './book-create-without-license.input';
import { bookWhereInput } from './book-where.input';

@InputType()
export class bookUpsertWithoutLicenseInput {

    @Field(() => bookUpdateWithoutLicenseInput, {nullable:false})
    @Type(() => bookUpdateWithoutLicenseInput)
    update!: bookUpdateWithoutLicenseInput;

    @Field(() => bookCreateWithoutLicenseInput, {nullable:false})
    @Type(() => bookCreateWithoutLicenseInput)
    create!: bookCreateWithoutLicenseInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;
}
