import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeCreateManyAreaInput } from './discount-code-create-many-area.input';
import { Type } from 'class-transformer';

@InputType()
export class discount_codeCreateManyAreaInputEnvelope {

    @Field(() => [discount_codeCreateManyAreaInput], {nullable:false})
    @Type(() => discount_codeCreateManyAreaInput)
    data!: Array<discount_codeCreateManyAreaInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
