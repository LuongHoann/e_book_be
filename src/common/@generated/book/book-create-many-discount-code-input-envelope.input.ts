import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateManyDiscount_codeInput } from './book-create-many-discount-code.input';
import { Type } from 'class-transformer';

@InputType()
export class bookCreateManyDiscount_codeInputEnvelope {

    @Field(() => [bookCreateManyDiscount_codeInput], {nullable:false})
    @Type(() => bookCreateManyDiscount_codeInput)
    data!: Array<bookCreateManyDiscount_codeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
