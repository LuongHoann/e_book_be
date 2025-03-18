import { Book } from '@/modules/book/entities/book.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsString, IsUUID,  } from 'class-validator';
import { Category } from '@/modules/category /entities/category.entity';

@ObjectType()
export class CategoryBook {
  @Field(()=> String)
  @IsString()
  category: string

  @Field(()=> ID , {nullable: true})
  @IsUUID()
  book_id: string;

  @Field(()=> Book , {nullable: false})
  book: Book

  @Field(()=> Category , { nullable: false})
  categoryDetails: Category
}
