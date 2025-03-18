import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { UserValidator } from './users.validators';
import { UserController } from './user.controller';

@Module({
  providers: [UsersResolver, UsersService ,PrismaService,UserValidator],
  exports: [UsersService],
  controllers: [UserController]
})
export class UsersModule {}
