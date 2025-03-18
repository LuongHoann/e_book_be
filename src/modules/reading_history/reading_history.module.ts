import { Module } from '@nestjs/common';
import { ReadingHistoryService } from './reading_history.service';
import { ReadingHistoryResolver } from './reading_history.resolver';
import { PrismaService } from '@/provider/prisma/prisma.service';

@Module({
  providers: [ReadingHistoryResolver, ReadingHistoryService ,PrismaService],
})
export class ReadingHistoryModule {}
