import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutDiscount_codeInput } from './book-create-without-discount-code.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutDiscount_codeInput } from './book-create-or-connect-without-discount-code.input';
import { bookCreateManyDiscount_codeInputEnvelope } from './book-create-many-discount-code-input-envelope.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class bookUncheckedCreateNestedManyWithoutDiscount_codeInput {

    @Field(() => [bookCreateWithoutDiscount_codeInput], {nullable:true})
    @Type(() => bookCreateWithoutDiscount_codeInput)
    create?: Array<bookCreateWithoutDiscount_codeInput>;

    @Field(() => [bookCreateOrConnectWithoutDiscount_codeInput], {nullable:true})
    @Type(() => bookCreateOrConnectWithoutDiscount_codeInput)
    connectOrCreate?: Array<bookCreateOrConnectWithoutDiscount_codeInput>;

    @Field(() => bookCreateManyDiscount_codeInputEnvelope, {nullable:true})
    @Type(() => bookCreateManyDiscount_codeInputEnvelope)
    createMany?: bookCreateManyDiscount_codeInputEnvelope;

    @Field(() => [bookWhereUniqueInput], {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>>;
}
