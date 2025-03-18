import { Module } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartResolver } from './shopping-cart.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';

@Module({
  providers: [ShoppingCartResolver, ShoppingCartService,PrismaService],
})
export class ShoppingCartModule {}
