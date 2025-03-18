import { Module } from '@nestjs/common';
import { LicenseOwnershipService } from './license-ownership.service';
import { LicenseOwnershipResolver } from './license-ownership.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';

@Module({
  providers: [LicenseOwnershipResolver, LicenseOwnershipService , PrismaService],
})
export class LicenseOwnershipModule {}
