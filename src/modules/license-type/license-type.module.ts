import { Module } from '@nestjs/common';
import { LicenseTypeService } from './license-type.service';
import { LicenseTypeResolver } from './license-type.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';

@Module({
  providers: [LicenseTypeResolver, LicenseTypeService , PrismaService],
})
export class LicenseTypeModule {}
