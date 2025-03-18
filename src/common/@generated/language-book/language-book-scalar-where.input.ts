import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';

@InputType()
export class language_bookScalarWhereInput {

    @Field(() => [language_bookScalarWhereInput], {nullable:true})
    AND?: Array<language_bookScalarWhereInput>;

    @Field(() => [language_bookScalarWhereInput], {nullable:true})
    OR?: Array<language_bookScalarWhereInput>;

    @Field(() => [language_bookScalarWhereInput], {nullable:true})
    NOT?: Array<language_bookScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    language_id?: IntFilter;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;
}
