import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseCreateManyBookInput } from './license-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class licenseCreateManyBookInputEnvelope {

    @Field(() => [licenseCreateManyBookInput], {nullable:false})
    @Type(() => licenseCreateManyBookInput)
    data!: Array<licenseCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
