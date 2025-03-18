import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateNewsInput {
  @Field(()=>String,{nullable: false})
  title: string

  @Field(()=> String, {nullable: false})
  content: string

  @Field(()=>String,  {nullable: false})
  user_id: string
}
