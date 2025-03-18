import { InputType } from "@nestjs/graphql";
import { CreateMultipleCategoryBookInput } from "./create-multiple-category_book.input";


@InputType()
export class UpdateMultipleCategoryBook extends CreateMultipleCategoryBookInput{}