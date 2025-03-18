import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { favouriteScalarWhereInput } from './favourite-scalar-where.input';
import { Type } from 'class-transformer';
import { favouriteUncheckedUpdateManyWithoutBookInput } from './favourite-unchecked-update-many-without-book.input';

@InputType()
export class favouriteUpdateManyWithWhereWithoutBookInput {

    @Field(() => favouriteScalarWhereInput, {nullable:false})
    @Type(() => favouriteScalarWhereInput)
    where!: favouriteScalarWhereInput;

    @Field(() => favouriteUncheckedUpdateManyWithoutBookInput, {nullable:false})
    @Type(() => favouriteUncheckedUpdateManyWithoutBookInput)
    data!: favouriteUncheckedUpdateManyWithoutBookInput;
}
