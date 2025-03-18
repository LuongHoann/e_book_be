import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';

@InputType()
export class favouriteScalarWhereInput {

    @Field(() => [favouriteScalarWhereInput], {nullable:true})
    AND?: Array<favouriteScalarWhereInput>;

    @Field(() => [favouriteScalarWhereInput], {nullable:true})
    OR?: Array<favouriteScalarWhereInput>;

    @Field(() => [favouriteScalarWhereInput], {nullable:true})
    NOT?: Array<favouriteScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;
}
