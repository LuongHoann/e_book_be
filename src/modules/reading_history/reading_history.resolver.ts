import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ReadingHistoryService } from './reading_history.service';
import { ReadingHistory } from './entities/reading_history.entity';
import { ResponseAPI } from '@/types/http.entity';
import { CreateReadingHistoryInput, UpdateReadingHistoryInput } from './dto';

@Resolver(() => ReadingHistory)
export class ReadingHistoryResolver {
  constructor(private readonly readingHistoryService: ReadingHistoryService) {}

  @Mutation(() => ResponseAPI<ReadingHistory>)
  createReadingHistory(@Args('createReadingHistoryInput') createReadingHistoryInput: CreateReadingHistoryInput) {
    return this.readingHistoryService.create(createReadingHistoryInput);
  }

  @Mutation(() => ResponseAPI<ReadingHistory>)
  updateReadingHistory(@Args('updateReadingHistoryInput') updateReadingHistoryInput: UpdateReadingHistoryInput) {
    return this.readingHistoryService.update(updateReadingHistoryInput);
  }


}
