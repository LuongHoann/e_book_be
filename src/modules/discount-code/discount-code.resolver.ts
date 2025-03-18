import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DiscountCodeService } from './discount-code.service';
import { DiscountCode } from './entities/discount-code.entity';
import { CreateDiscountCodeInput } from './dto/create-discount-code.input';
import { UpdateDiscountCodeInput } from './dto/update-discount-code.input';
import { ResponseAPI } from '@/types/http.entity';

@Resolver(() => DiscountCode)
export class DiscountCodeResolver {
  constructor(private readonly discountCodeService: DiscountCodeService) {}

  @Mutation(() => ResponseAPI<DiscountCode>)
  createDiscountCode(@Args('createDiscountCodeInput') createDiscountCodeInput: CreateDiscountCodeInput) {
    return this.discountCodeService.create(createDiscountCodeInput);
  }

  @Query(() => ResponseAPI<DiscountCode> , { name: 'discountCodes' })
  findAll() {
    return this.discountCodeService.findAll();
  }

  @Mutation(() => ResponseAPI<DiscountCode>)
  updateDiscountCode(@Args('updateDiscountCodeInput') updateDiscountCodeInput: UpdateDiscountCodeInput) {
    return this.discountCodeService.update(updateDiscountCodeInput.id, updateDiscountCodeInput);
  }

  @Mutation(() => ResponseAPI<DiscountCode>)
  removeDiscountCode(@Args('id', { type: () => Int }) id: number) {
    return this.discountCodeService.remove(id);
  }
}
