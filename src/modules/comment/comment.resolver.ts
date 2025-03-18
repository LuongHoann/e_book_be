import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { ResponseAPI } from '@/types/http.entity';
import { DeleteCommentInput } from './dto';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService ) {}

  @Mutation(() => ResponseAPI<Comment>)
  createComment(@Args('createCommentInput') createCommentInput: CreateCommentInput) {
    return this.commentService.create(createCommentInput);
  }

  // @Query(() => ResponseAPI<Comment>, { name: 'comments' })
  // findAll() {
  //   return this.commentService.findAll();
  // }


  @Mutation(() => ResponseAPI<Comment>)
  updateComment(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput) {
    return this.commentService.update(updateCommentInput);
  }

  @Mutation(() => ResponseAPI<Comment>)
  removeComment(@Args('deleteCommentInput') deleteCommentInput: DeleteCommentInput ) {
    return this.commentService.remove(deleteCommentInput);
  }
}
