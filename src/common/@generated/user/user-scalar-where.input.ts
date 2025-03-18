import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class userScalarWhereInput {

    @Field(() => [userScalarWhereInput], {nullable:true})
    AND?: Array<userScalarWhereInput>;

    @Field(() => [userScalarWhereInput], {nullable:true})
    OR?: Array<userScalarWhereInput>;

    @Field(() => [userScalarWhereInput], {nullable:true})
    NOT?: Array<userScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    user_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expired_code?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    account_status?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    role?: IntFilter;
}
