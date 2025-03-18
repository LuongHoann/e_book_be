import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateReadingHistoryInput {
  @Field(()=>ID,{nullable: false})
  user_id: string

  @Field(()=>ID, { nullable: false})
  book_id: string

  @Field(()=>ID, {nullable: false})
  state: string

  @Field(()=> Int,{ nullable: false})
  page: number

}
