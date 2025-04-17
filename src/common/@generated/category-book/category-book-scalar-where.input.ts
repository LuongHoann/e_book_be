import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';

@InputType()
export class category_bookScalarWhereInput {

    @Field(() => [category_bookScalarWhereInput], {nullable:true})
    AND?: Array<category_bookScalarWhereInput>;

    @Field(() => [category_bookScalarWhereInput], {nullable:true})
    OR?: Array<category_bookScalarWhereInput>;

    @Field(() => [category_bookScalarWhereInput], {nullable:true})
    NOT?: Array<category_bookScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;
}
