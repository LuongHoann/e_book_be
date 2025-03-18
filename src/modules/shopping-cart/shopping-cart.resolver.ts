import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { ResponseAPI } from '@/types/http.entity';
import { CreateShoppingCartInput, DeleteShoppingCartInput } from './dto';

@Resolver(() => ResponseAPI<ShoppingCart>)
export class ShoppingCartResolver {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Mutation(() => ResponseAPI<ShoppingCart>)
  createShoppingCart(@Args('createShoppingCartInput') createShoppingCartInput: CreateShoppingCartInput) {
    return this.shoppingCartService.create(createShoppingCartInput);
  }

  @Query(() => ResponseAPI<ShoppingCart>, { name: 'shoppingCartOfUser' })
  findAll(@Args('user_id' , { type: () => String }) user_id : ShoppingCart['user_id']) {
    return this.shoppingCartService.findAll(user_id);
  }

  @Mutation(() => ResponseAPI<ShoppingCart>)
  removeShoppingCart(@Args('deleteShoppingCartInput') deleteShoppingCartInput: DeleteShoppingCartInput) {
    return this.shoppingCartService.remove(deleteShoppingCartInput);
  }

  @Mutation(() => ResponseAPI<ShoppingCart>)
  removeAllShoppingCart(@Args('user_id', { type: ()=> String }) user_id : ShoppingCart['user_id']) {
    return this.shoppingCartService.removeAll(user_id);
  }
}
