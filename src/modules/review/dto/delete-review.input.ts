import { InputType, OmitType, PickType } from "@nestjs/graphql";
import { CreateReviewInput } from "./create-review.input";

@InputType()
export class DeleteReviewInput extends PickType(CreateReviewInput,['user_id','book_id'] as const){}
