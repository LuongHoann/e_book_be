import { Field, ID, InputType} from '@nestjs/graphql';
import { IsUUID, IsString } from 'class-validator';

@InputType()
export class CreateCommentInput {
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
