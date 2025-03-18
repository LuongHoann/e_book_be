import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutLicenseInput } from './book-update-without-license.input';

@InputType()
export class bookUpdateToOneWithWhereWithoutLicenseInput {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => bookUpdateWithoutLicenseInput, {nullable:false})
    @Type(() => bookUpdateWithoutLicenseInput)
    data!: bookUpdateWithoutLicenseInput;
}
