import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@ObjectType()
export class Favourite {
  @Field(() => ID, { nullable: false })
  @IsUUID()
  book_id: string;

  @Field(() => ID, { nullable: false })
  @IsUUID()
  user_id: string;
}