import { Module } from '@nestjs/common';
import { FavouriteService } from './favourite.service';
import { FavouriteResolver } from './favourite.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';

@Module({
  providers: [FavouriteResolver, FavouriteService , PrismaService],
})
export class FavouriteModule {}
