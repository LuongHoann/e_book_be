import { DeleteFavouriteInput } from './dto/delete-favourite.input';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FavouriteService } from './favourite.service';
import { Favourite } from './entities/favourite.entity';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { ResponseAPI } from '@/types/http.entity';

@Resolver(() => Favourite)
export class FavouriteResolver {
  constructor(private readonly favouriteService: FavouriteService) {}

  @Mutation(() => ResponseAPI<Favourite>)
  createFavourite(@Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput) {
    return this.favouriteService.create(createFavouriteInput);
  }

  @Query(() => ResponseAPI<Favourite>, { name: 'favourites' })
  findAll() {
    return this.favouriteService.findAll();
  }

  // @Query(() => Favourite, { name: 'favourite' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.favouriteService.findOne(id);
  // }

  @Mutation(() => ResponseAPI<Favourite>)
  removeFavourite(deleteFavouriteInput :DeleteFavouriteInput) {
    return this.favouriteService.remove(deleteFavouriteInput);
  }
}
