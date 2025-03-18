import { Book } from '@/modules/book/entities/book.entity';
import { user } from './../../../common/@generated/user/user.model';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from '@/modules/user/entities/user.entity';

@ObjectType()
export class Review {
  @Field(()=>ID ,{nullable: false})
  bood_id:  string

  @Field(()=>ID ,{nullable: false})
  user_id:  string

  @Field(()=>Int,{nullable: false})
  rating: number

  @Field(()=> Book,{nullable: false})
  book: Book

  @Field(()=> User, {nullable:false})
  user:User
}
