import { CreateCommentInput } from './create-comment.input';
import { InputType} from '@nestjs/graphql';

@InputType()
export class UpdateCommentInput extends CreateCommentInput{}
