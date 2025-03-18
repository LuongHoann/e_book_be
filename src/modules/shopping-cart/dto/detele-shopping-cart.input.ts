import { CreateShoppingCartInput } from './create-shopping-cart.input';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DeleteShoppingCartInput extends CreateShoppingCartInput {}
