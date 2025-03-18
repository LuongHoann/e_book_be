import { Book } from '@/modules/book/entities/book.entity';
import { User } from '@/modules/user/entities/user.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ShoppingCart {
  @Field(()=> ID)
  user_id: string

  @Field(()=> ID )
  book_id: string

  @Field(()=> Book)
  book: Book

  @Field(()=>User)
  user:User

}
