import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class book_discountScalarWhereInput {

    @Field(() => [book_discountScalarWhereInput], {nullable:true})
    AND?: Array<book_discountScalarWhereInput>;

    @Field(() => [book_discountScalarWhereInput], {nullable:true})
    OR?: Array<book_discountScalarWhereInput>;

    @Field(() => [book_discountScalarWhereInput], {nullable:true})
    NOT?: Array<book_discountScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => IntFilter, {nullable:true})
    discount_id?: IntFilter;
}
