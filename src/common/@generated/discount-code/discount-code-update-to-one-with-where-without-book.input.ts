import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeWhereInput } from './discount-code-where.input';
import { Type } from 'class-transformer';
import { discount_codeUpdateWithoutBookInput } from './discount-code-update-without-book.input';

@InputType()
export class discount_codeUpdateToOneWithWhereWithoutBookInput {

    @Field(() => discount_codeWhereInput, {nullable:true})
    @Type(() => discount_codeWhereInput)
    where?: discount_codeWhereInput;

    @Field(() => discount_codeUpdateWithoutBookInput, {nullable:false})
    @Type(() => discount_codeUpdateWithoutBookInput)
    data!: discount_codeUpdateWithoutBookInput;
}
