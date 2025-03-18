import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutDiscount_codeInput } from './book-create-without-discount-code.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutDiscount_codeInput } from './book-create-or-connect-without-discount-code.input';
import { bookUpsertWithWhereUniqueWithoutDiscount_codeInput } from './book-upsert-with-where-unique-without-discount-code.input';
import { bookCreateManyDiscount_codeInputEnvelope } from './book-create-many-discount-code-input-envelope.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { bookUpdateWithWhereUniqueWithoutDiscount_codeInput } from './book-update-with-where-unique-without-discount-code.input';
import { bookUpdateManyWithWhereWithoutDiscount_codeInput } from './book-update-many-with-where-without-discount-code.input';
import { bookScalarWhereInput } from './book-scalar-where.input';

@InputType()
export class bookUpdateManyWithoutDiscount_codeNestedInput {

    @Field(() => [bookCreateWithoutDiscount_codeInput], {nullable:true})
    @Type(() => bookCreateWithoutDiscount_codeInput)
    create?: Array<bookCreateWithoutDiscount_codeInput>;

    @Field(() => [bookCreateOrConnectWithoutDiscount_codeInput], {nullable:true})
    @Type(() => bookCreateOrConnectWithoutDiscount_codeInput)
    connectOrCreate?: Array<bookCreateOrConnectWithoutDiscount_codeInput>;

    @Field(() => [bookUpsertWithWhereUniqueWithoutDiscount_codeInput], {nullable:true})
    @Type(() => bookUpsertWithWhereUniqueWithoutDiscount_codeInput)
    upsert?: Array<bookUpsertWithWhereUniqueWithoutDiscount_codeInput>;

    @Field(() => bookCreateManyDiscount_codeInputEnvelope, {nullable:true})
    @Type(() => bookCreateManyDiscount_codeInputEnvelope)
    createMany?: bookCreateManyDiscount_codeInputEnvelope;

    @Field(() => [bookWhereUniqueInput], {nullable:true})
    @Type(() => bookWhereUniqueInput)
    set?: Array<Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>>;

    @Field(() => [bookWhereUniqueInput], {nullable:true})
    @Type(() => bookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>>;

    @Field(() => [bookWhereUniqueInput], {nullable:true})
    @Type(() => bookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>>;

    @Field(() => [bookWhereUniqueInput], {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>>;

    @Field(() => [bookUpdateWithWhereUniqueWithoutDiscount_codeInput], {nullable:true})
    @Type(() => bookUpdateWithWhereUniqueWithoutDiscount_codeInput)
    update?: Array<bookUpdateWithWhereUniqueWithoutDiscount_codeInput>;

    @Field(() => [bookUpdateManyWithWhereWithoutDiscount_codeInput], {nullable:true})
    @Type(() => bookUpdateManyWithWhereWithoutDiscount_codeInput)
    updateMany?: Array<bookUpdateManyWithWhereWithoutDiscount_codeInput>;

    @Field(() => [bookScalarWhereInput], {nullable:true})
    @Type(() => bookScalarWhereInput)
    deleteMany?: Array<bookScalarWhereInput>;
}
