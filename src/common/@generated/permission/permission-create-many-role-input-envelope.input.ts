import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionCreateManyRoleInput } from './permission-create-many-role.input';
import { Type } from 'class-transformer';

@InputType()
export class permissionCreateManyRoleInputEnvelope {

    @Field(() => [permissionCreateManyRoleInput], {nullable:false})
    @Type(() => permissionCreateManyRoleInput)
    data!: Array<permissionCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
