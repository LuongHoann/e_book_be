import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Role {
  @Field(()=>ID)
  id: number

  @Field(()=>String)
  role_name: string

  @Field(()=> ID)
  user_id: string
}
