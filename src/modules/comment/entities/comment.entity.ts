import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsString, IsUUID } from 'class-validator';

@ObjectType()
export class Comment {
  @Field(() => ID, { nullable: false })
  @IsUUID()
  book_id: string;

  @Field(() => ID, { nullable: false })
  @IsUUID()
  user_id: string;

  @Field(() => String)
  @IsString()
  context: string;
}
