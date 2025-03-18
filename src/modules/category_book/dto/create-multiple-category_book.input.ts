import { InputType, Field, ID } from '@nestjs/graphql';
import { IsArray, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateMultipleCategoryBookInput {
  @Field(()=> [String])
  @IsArray()
  @IsString({each: true})
  category: string[]

  @Field(()=> ID , {nullable: true})
  @IsUUID()
  book_id: string

}
