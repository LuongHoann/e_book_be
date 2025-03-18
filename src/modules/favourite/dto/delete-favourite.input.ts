import { Favourite } from '../entities/favourite.entity';
import { InputType} from '@nestjs/graphql';

@InputType()
export class DeleteFavouriteInput extends Favourite{}
