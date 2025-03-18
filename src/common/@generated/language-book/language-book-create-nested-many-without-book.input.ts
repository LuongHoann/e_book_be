import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookCreateWithoutBookInput } from './language-book-create-without-book.input';
import { Type } from 'class-transformer';
import { language_bookCreateOrConnectWithoutBookInput } from './language-book-create-or-connect-without-book.input';
import { language_bookCreateManyBookInputEnvelope } from './language-book-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { language_bookWhereUniqueInput } from './language-book-where-unique.input';

@InputType()
export class language_bookCreateNestedManyWithoutBookInput {

    @Field(() => [language_bookCreateWithoutBookInput], {nullable:true})
    @Type(() => language_bookCreateWithoutBookInput)
    create?: Array<language_bookCreateWithoutBookInput>;

    @Field(() => [language_bookCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => language_bookCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<language_bookCreateOrConnectWithoutBookInput>;

    @Field(() => language_bookCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => language_bookCreateManyBookInputEnvelope)
    createMany?: language_bookCreateManyBookInputEnvelope;

    @Field(() => [language_bookWhereUniqueInput], {nullable:true})
    @Type(() => language_bookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>>;
}
