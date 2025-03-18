import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeUpdateWithoutBookInput } from './discount-code-update-without-book.input';
import { Type } from 'class-transformer';
import { discount_codeCreateWithoutBookInput } from './discount-code-create-without-book.input';
import { discount_codeWhereInput } from './discount-code-where.input';

@InputType()
export class discount_codeUpsertWithoutBookInput {

    @Field(() => discount_codeUpdateWithoutBookInput, {nullable:false})
    @Type(() => discount_codeUpdateWithoutBookInput)
    update!: discount_codeUpdateWithoutBookInput;

    @Field(() => discount_codeCreateWithoutBookInput, {nullable:false})
    @Type(() => discount_codeCreateWithoutBookInput)
    create!: discount_codeCreateWithoutBookInput;

    @Field(() => discount_codeWhereInput, {nullable:true})
    @Type(() => discount_codeWhereInput)
    where?: discount_codeWhereInput;
}
