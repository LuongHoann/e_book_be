import { ResponseAPI } from '@/types/http.entity';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput, DeleteReviewInput, UpdateReviewInput } from './dto';


@Resolver(() => ResponseAPI<Review>)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Mutation(() =>  ResponseAPI<Review>)
  createReview(@Args('createReviewInput') createReviewInput: CreateReviewInput) {
    return this.reviewService.create(createReviewInput);
  }

  @Mutation(() =>  ResponseAPI<Review>)
  updateReview(@Args('updateReviewInput') updateReviewInput: UpdateReviewInput) {
    return this.reviewService.update(updateReviewInput);
  }

  @Mutation(() =>  ResponseAPI<Review>)
  removeReview(@Args('deleteReviewInput') deleteReviewInput: DeleteReviewInput) {
    return this.reviewService.remove(deleteReviewInput);
  }
}
