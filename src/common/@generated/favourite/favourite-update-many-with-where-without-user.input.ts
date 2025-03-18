import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { favouriteScalarWhereInput } from './favourite-scalar-where.input';
import { Type } from 'class-transformer';
import { favouriteUncheckedUpdateManyWithoutUserInput } from './favourite-unchecked-update-many-without-user.input';

@InputType()
export class favouriteUpdateManyWithWhereWithoutUserInput {

    @Field(() => favouriteScalarWhereInput, {nullable:false})
    @Type(() => favouriteScalarWhereInput)
    where!: favouriteScalarWhereInput;

    @Field(() => favouriteUncheckedUpdateManyWithoutUserInput, {nullable:false})
    @Type(() => favouriteUncheckedUpdateManyWithoutUserInput)
    data!: favouriteUncheckedUpdateManyWithoutUserInput;
}
