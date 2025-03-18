import { InputType, Field, ID } from '@nestjs/graphql';
import { IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateCategoryBookInput {
  @Field(()=> String)
  @IsString()
  category: string

  @Field(()=> ID , {nullable: true})
  @IsUUID()
  book_id: string

}
