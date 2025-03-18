
import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  Min,
  IsOptional,
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

  @Field(() => Int, { nullable: true }) // Page number can be optional
  @IsInt()
  @Min(0) // Page number can't be negative
  page_number: number | null;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  discount_id: number;

  @Field(() => Int, { nullable: true  , defaultValue: 0})
  @IsOptional()
  @IsInt()
  @Min(0)
  views: number;

}
