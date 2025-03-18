import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class ReadingHistory {
  @Field(()=>ID)
  user_id: string

  @Field(()=>ID)
  book_id: string

  @Field(()=>ID)
  state: string

  @Field(()=> Int)
  page: number

  @Field(()=> String)
  update_at: Date // last_read
}
