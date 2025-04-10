import { Field, InputType, Int, Float, ID } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  Min,
  IsOptional,
  IsUrl,
  IsBoolean,
  IsArray,
  IsDateString,
  IsNumber,
} from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  book_title: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  author: string;

  @Field(() => String, { nullable: true })
  @IsString()
  description: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  isbn: string;

  @Field(() => Int, { nullable: false })
  @IsInt()
  @Min(1)
  page_number: number;

  @Field(() => Float, { nullable: false })
  @IsNumber()
  @Min(0)
  price: number;

  @Field(() => String, { nullable: false }) 
  @IsDateString() 
  published_at: string; 

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  status: string;

  // @Field(() => Boolean, { nullable: false })
  // @IsBoolean()
  // isFeatured: boolean;

  @Field(() => ID, { nullable: false })
  @IsNotEmpty()
  licenseType: string; // ID thường là string

  @Field(() => [ID], { nullable: false })
  @IsArray()
  @IsNotEmpty({ each: true })
  languages: number[];

  @Field(() => [ID], { nullable: false })
  @IsArray()
  @IsNotEmpty({ each: true })
  areas: string[];

  @Field(() => [ID], { nullable: false })
  @IsArray()
  @IsNotEmpty({ each: true })
  categories: string[];

  @Field(() => String, { nullable: false })
  @IsUrl() // Kiểm tra URL hợp lệ
  book_key: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsUrl()
  banner_key?: string;

  @Field(()=> Int,{defaultValue:0})
  @IsOptional()
  views: number

  @Field(() => [ID], { nullable: false })
  @IsNotEmpty()
  discount_code: number[];
}