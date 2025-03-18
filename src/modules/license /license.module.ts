import { Module } from '@nestjs/common';
import { LicenseService } from './license.service';
import { LicenseResolver } from './license.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';

@Module({
  providers: [LicenseResolver, LicenseService ,PrismaService],
})
export class LicenseModule {}
