import { InputType } from '@nestjs/graphql';
import { Favourite } from '../entities/favourite.entity';

@InputType()
export class CreateFavouriteInput extends Favourite{}
