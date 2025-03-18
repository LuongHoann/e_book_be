import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class reviewScalarWhereInput {

    @Field(() => [reviewScalarWhereInput], {nullable:true})
    AND?: Array<reviewScalarWhereInput>;

    @Field(() => [reviewScalarWhereInput], {nullable:true})
    OR?: Array<reviewScalarWhereInput>;

    @Field(() => [reviewScalarWhereInput], {nullable:true})
    NOT?: Array<reviewScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => IntFilter, {nullable:true})
    rating?: IntFilter;
}
