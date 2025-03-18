import { Favourite } from '@/modules/favourite/entities/favourite.entity';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { LicenseOwnership } from '@/modules/license-ownership/entities/license-ownership.entity';
import { News } from '@/modules/news/entities/news.entity';
import { Review } from '@/modules/review/entities/review.entity';
import { ShoppingCart } from '@/modules/shopping-cart/entities/shopping-cart.entity';
import { TransactionHistory } from '@/modules/transaction-history/entities/transaction-history.entity';
import { Comment } from '@/modules/comment/entities/comment.entity';

@ObjectType()
export class User {
  @Field(() => ID,{nullable: false})
  id: string;

  @Field(() => String)
  user_name: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  avatar: string | null;

  @Field(() => String)
  code: string;

  @Field(() => Date)
  expired_code: Date;

  @Field(() => Boolean)
  account_status: boolean;

  @Field(() => Int)
  role: number;

  @Field(() => [Comment], { nullable: 'itemsAndList' })
  comment?: Comment[];

  @Field(() => [Favourite], { nullable: 'itemsAndList' })
  favourite?: Favourite[];

  @Field(() => [LicenseOwnership], { nullable: 'itemsAndList' })
  license_ownership?: LicenseOwnership[];

  @Field(() => [News], { nullable: 'itemsAndList' })
  news?: News[];

  @Field(() => [Review], { nullable: 'itemsAndList' })
  review?: Review[];

  @Field(() => [ShoppingCart], { nullable: 'itemsAndList' })
  shopping_cart?: ShoppingCart[];

  @Field(() => [TransactionHistory], { nullable: 'itemsAndList' })
  transaction_history?: TransactionHistory[];
}