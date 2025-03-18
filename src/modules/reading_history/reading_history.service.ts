import { Injectable } from '@nestjs/common';
import { CreateReadingHistoryInput } from './dto/create-reading_history.input';
import { UpdateReadingHistoryInput } from './dto/update-reading_history.input';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class ReadingHistoryService {
  constructor (private prisma: PrismaService , private i18n: I18nService){}

  async create(createReadingHistoryInput: CreateReadingHistoryInput) {
      try {
         
      } catch (error) {
      }
  }

  findAll() {
    return `This action returns all readingHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} readingHistory`;
  }

  update( updateReadingHistoryInput: UpdateReadingHistoryInput) {
    return 
  }

  remove(id: number) {
    return `This action removes a #${id} readingHistory`;
  }
}
