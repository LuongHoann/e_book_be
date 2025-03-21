import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateReadingHistoryInput } from './dto/create-reading_history.input';
import { UpdateReadingHistoryInput } from './dto/update-reading_history.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';
import { buildResponse } from '@/utils/customResponse';

@Injectable()
export class ReadingHistoryService {
  constructor(
    private prisma: PrismaService,
    private i18n: I18nService,
  ) {}

  async create(createReadingHistoryInput: CreateReadingHistoryInput) {
    try {
      await this.prisma.reading_history.create({
        data: createReadingHistoryInput,
      });
      return buildResponse(
        this.i18n,
        'index.general.success',
        HttpStatus.CREATED,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.general.failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(updateReadingHistoryInput: UpdateReadingHistoryInput) {
    try {
      await this.prisma.reading_history.update({
        where: {
          user_id_book_id: {
            user_id: updateReadingHistoryInput.user_id,
            book_id: updateReadingHistoryInput.book_id,
          },
        },
        data: updateReadingHistoryInput,
      });
      return buildResponse(this.i18n,"index.general.success",HttpStatus.OK)
    } catch (error) {
      return buildResponse(this.i18n,"index.general.failed",HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

}
