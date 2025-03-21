import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { UserValidator } from './users.validators';

@Module({
  providers: [UsersResolver, UsersService ,PrismaService,UserValidator],
  exports: [UsersService , PrismaService ,UserValidator],
})
export class UsersModule {}
