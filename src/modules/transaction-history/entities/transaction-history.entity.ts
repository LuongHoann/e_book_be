import { Book } from '@/modules/book/entities/book.entity';
import { User } from '@/modules/user/entities/user.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class TransactionHistory {
  @Field(()=>ID )
  bood_id:  string

  @Field(()=>ID )
  user_id:  string

  @Field(()=> Book)
  book: Book

  @Field(()=> String)
  payment_date: string

  @Field(()=> User)
  user:User
}
