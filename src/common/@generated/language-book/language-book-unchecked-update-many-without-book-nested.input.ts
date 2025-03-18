import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookCreateWithoutBookInput } from './language-book-create-without-book.input';
import { Type } from 'class-transformer';
import { language_bookCreateOrConnectWithoutBookInput } from './language-book-create-or-connect-without-book.input';
import { language_bookUpsertWithWhereUniqueWithoutBookInput } from './language-book-upsert-with-where-unique-without-book.input';
import { language_bookCreateManyBookInputEnvelope } from './language-book-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { language_bookWhereUniqueInput } from './language-book-where-unique.input';
import { language_bookUpdateWithWhereUniqueWithoutBookInput } from './language-book-update-with-where-unique-without-book.input';
import { language_bookUpdateManyWithWhereWithoutBookInput } from './language-book-update-many-with-where-without-book.input';
import { language_bookScalarWhereInput } from './language-book-scalar-where.input';

@InputType()
export class language_bookUncheckedUpdateManyWithoutBookNestedInput {

    @Field(() => [language_bookCreateWithoutBookInput], {nullable:true})
    @Type(() => language_bookCreateWithoutBookInput)
    create?: Array<language_bookCreateWithoutBookInput>;

    @Field(() => [language_bookCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => language_bookCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<language_bookCreateOrConnectWithoutBookInput>;

    @Field(() => [language_bookUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => language_bookUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<language_bookUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => language_bookCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => language_bookCreateManyBookInputEnvelope)
    createMany?: language_bookCreateManyBookInputEnvelope;

    @Field(() => [language_bookWhereUniqueInput], {nullable:true})
    @Type(() => language_bookWhereUniqueInput)
    set?: Array<Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>>;

    @Field(() => [language_bookWhereUniqueInput], {nullable:true})
    @Type(() => language_bookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>>;

    @Field(() => [language_bookWhereUniqueInput], {nullable:true})
    @Type(() => language_bookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>>;

    @Field(() => [language_bookWhereUniqueInput], {nullable:true})
    @Type(() => language_bookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>>;

    @Field(() => [language_bookUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => language_bookUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<language_bookUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [language_bookUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => language_bookUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<language_bookUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [language_bookScalarWhereInput], {nullable:true})
    @Type(() => language_bookScalarWhereInput)
    deleteMany?: Array<language_bookScalarWhereInput>;
}
