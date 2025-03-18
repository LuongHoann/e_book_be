import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaResolver } from './area.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { AreaValidators } from './area.validators';

@Module({
  providers: [AreaResolver, AreaService , PrismaService , AreaValidators],
})
export class AreaModule {}
  