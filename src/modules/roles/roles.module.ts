import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';

@Module({
  providers: [RolesResolver, RolesService,PrismaService],
})
export class RolesModule {}
