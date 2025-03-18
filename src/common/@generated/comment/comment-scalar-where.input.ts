import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class commentScalarWhereInput {

    @Field(() => [commentScalarWhereInput], {nullable:true})
    AND?: Array<commentScalarWhereInput>;

    @Field(() => [commentScalarWhereInput], {nullable:true})
    OR?: Array<commentScalarWhereInput>;

    @Field(() => [commentScalarWhereInput], {nullable:true})
    NOT?: Array<commentScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;
}
