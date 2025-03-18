import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class roleScalarWhereInput {

    @Field(() => [roleScalarWhereInput], {nullable:true})
    AND?: Array<roleScalarWhereInput>;

    @Field(() => [roleScalarWhereInput], {nullable:true})
    OR?: Array<roleScalarWhereInput>;

    @Field(() => [roleScalarWhereInput], {nullable:true})
    NOT?: Array<roleScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    role_name?: StringFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user_id?: UuidNullableFilter;
}
