import { Module } from '@nestjs/common';
import { DmsService } from './dms.service';
import { DmsController } from './dms.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [DmsService , ConfigService],
  controllers: [DmsController]
})
export class DmsModule {}
