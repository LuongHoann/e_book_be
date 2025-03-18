import { Module } from '@nestjs/common';
import { TransactionHistoryService } from './transaction-history.service';
import { TransactionHistoryResolver } from './transaction-history.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';

@Module({
  providers: [TransactionHistoryResolver, TransactionHistoryService,PrismaService],
})
export class TransactionHistoryModule {}
