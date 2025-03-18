import { InputType, Field, Int, PickType } from '@nestjs/graphql';
import { DiscountCode } from '../entities/discount-code.entity';

@InputType()
export class DeleteDiscountCodeInput extends PickType(DiscountCode , ['id'] as const){}
    
