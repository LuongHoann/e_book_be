
import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  Min,
  IsOptional,
  IsUrl,
} from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  book_title: string;

  @Field(() => Int, { nullable: false })
  @IsInt()
  @Min(0)
  pushlied_at: number;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  author: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  isbn: string;

  @Field(() => Int, { nullable: false })
  @IsInt()
  @Min(0) 
  page_number: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  discount_id: number;

  @Field(() => Int, { nullable: true  , defaultValue: 0})
  @IsOptional()
  @IsInt()
  @Min(0)
  views: number;

  @Field(()=> String, {nullable: false})
  @IsUrl()
  book_content_url: string;

  
  @Field(()=>String , {nullable: true})
  @IsUrl()
  book_banner_url: string;
}
