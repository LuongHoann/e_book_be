import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';

@InputType()
export class category_bookScalarWhereInput {

    @Field(() => [category_bookScalarWhereInput], {nullable:true})
    AND?: Array<category_bookScalarWhereInput>;

    @Field(() => [category_bookScalarWhereInput], {nullable:true})
    OR?: Array<category_bookScalarWhereInput>;

    @Field(() => [category_bookScalarWhereInput], {nullable:true})
    NOT?: Array<category_bookScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;
}
