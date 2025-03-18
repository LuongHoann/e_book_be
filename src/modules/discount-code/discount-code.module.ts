import { Module } from '@nestjs/common';
import { DiscountCodeService } from './discount-code.service';
import { DiscountCodeResolver } from './discount-code.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { DiscountCodeValidators } from './discount-code.validators';

@Module({
  providers: [DiscountCodeResolver, DiscountCodeService , PrismaService , DiscountCodeValidators],
})
export class DiscountCodeModule {}
