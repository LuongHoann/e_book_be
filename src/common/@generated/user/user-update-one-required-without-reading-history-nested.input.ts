import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutReading_historyInput } from './user-create-without-reading-history.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutReading_historyInput } from './user-create-or-connect-without-reading-history.input';
import { userUpsertWithoutReading_historyInput } from './user-upsert-without-reading-history.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { userUpdateToOneWithWhereWithoutReading_historyInput } from './user-update-to-one-with-where-without-reading-history.input';

@InputType()
export class userUpdateOneRequiredWithoutReading_historyNestedInput {

    @Field(() => userCreateWithoutReading_historyInput, {nullable:true})
    @Type(() => userCreateWithoutReading_historyInput)
    create?: userCreateWithoutReading_historyInput;

    @Field(() => userCreateOrConnectWithoutReading_historyInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutReading_historyInput)
    connectOrCreate?: userCreateOrConnectWithoutReading_historyInput;

    @Field(() => userUpsertWithoutReading_historyInput, {nullable:true})
    @Type(() => userUpsertWithoutReading_historyInput)
    upsert?: userUpsertWithoutReading_historyInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userUpdateToOneWithWhereWithoutReading_historyInput, {nullable:true})
    @Type(() => userUpdateToOneWithWhereWithoutReading_historyInput)
    update?: userUpdateToOneWithWhereWithoutReading_historyInput;
}
