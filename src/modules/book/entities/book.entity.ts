import { CategoryBook } from '@/modules/category_book/entities/category_book.entity';
import { Comment } from '@/modules/comment/entities/comment.entity';
import { Favourite } from '@/modules/favourite/entities/favourite.entity';
import { Language } from '@/modules/language/entities/language.entity';
import { License } from '@/modules/license /entities/license.entity';
import { Review } from '@/modules/review/entities/review.entity';
import { ShoppingCart } from '@/modules/shopping-cart/entities/shopping-cart.entity';
import { TransactionHistory } from '@/modules/transaction-history/entities/transaction-history.entity';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  book_title: string;

  @Field(() => Int, { nullable: false })
  pushlied_at: number;

  @Field(() => String, { nullable: false })
  author: string;

  @Field(() => String, { nullable: true })
  isbn: string;

  @Field(() => Int, { nullable: false })
  page_number: number;

  @Field(() => Int, { nullable: true })
  discount_id: number | null;

  @Field(() => Int, { nullable: true })
  views: number;

  @Field(() => String, { nullable: false })
  book_content_url: string;

  @Field(() => String, { nullable: true })
  book_banner_url: string | null;

  @Field(() => [Language], { nullable: 'itemsAndList' })
  language_book?: Language[];

  @Field(() => [CategoryBook], { nullable: 'itemsAndList' })
  category_book?: CategoryBook[];

  @Field(() => [Comment], { nullable: 'itemsAndList' })
  comment?: Comment[];

  @Field(() => [Favourite], { nullable: 'itemsAndList' })
  favourite?: Favourite[];

  @Field(() => [License], { nullable: 'itemsAndList' })
  license?: License[];

  @Field(() => [Review], { nullable: 'itemsAndList' })
  review?: Review[];

  @Field(() => [ShoppingCart], { nullable: 'itemsAndList' })
  shopping_cart?: ShoppingCart[];

  @Field(() => [TransactionHistory], { nullable: 'itemsAndList' })
  transaction_history?: TransactionHistory[];
}
