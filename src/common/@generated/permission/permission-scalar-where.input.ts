import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class permissionScalarWhereInput {

    @Field(() => [permissionScalarWhereInput], {nullable:true})
    AND?: Array<permissionScalarWhereInput>;

    @Field(() => [permissionScalarWhereInput], {nullable:true})
    OR?: Array<permissionScalarWhereInput>;

    @Field(() => [permissionScalarWhereInput], {nullable:true})
    NOT?: Array<permissionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    role_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;
}
