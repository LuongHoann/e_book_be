import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';

@InputType()
export class shopping_cartScalarWhereInput {

    @Field(() => [shopping_cartScalarWhereInput], {nullable:true})
    AND?: Array<shopping_cartScalarWhereInput>;

    @Field(() => [shopping_cartScalarWhereInput], {nullable:true})
    OR?: Array<shopping_cartScalarWhereInput>;

    @Field(() => [shopping_cartScalarWhereInput], {nullable:true})
    NOT?: Array<shopping_cartScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;
}
