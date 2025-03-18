import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateRoleInput {
  @Field(()=>String)
  role_name: string

  @Field(()=> ID)
  user_id: string
}
