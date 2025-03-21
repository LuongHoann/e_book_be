import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTransactionHistoryInput } from './dto/create-transaction-history.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';

@Injectable()
export class TransactionHistoryService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
  ) { }
  async create(createTransactionHistoryInput: CreateTransactionHistoryInput) {
    try {
      await this.prisma.transaction_history.create({
        data: createTransactionHistoryInput,
      });
      return buildResponse(this.i18n, 'index.general.success', HttpStatus.OK);
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.general.failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      await this.prisma.transaction_history.findMany();
      return buildResponse(
        this.i18n,
        'index.general.success',
        HttpStatus.ACCEPTED,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.general.failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
