import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NewsService } from './news.service';
import { News } from './entities/news.entity';
import { CreateNewsInput } from './dto/create-news.input';
import { UpdateNewsInput } from './dto/update-news.input';
import { ResponseAPI } from '@/types/http.entity';

@Resolver(() => ResponseAPI<News>)
export class NewsResolver {
  constructor(private readonly newsService: NewsService) {}

  @Mutation(() => ResponseAPI<News>)
  createNews(@Args('createNewsInput') createNewsInput: CreateNewsInput) {
    return this.newsService.create(createNewsInput);
  }

  @Query(() => ResponseAPI<News>, { name: 'news' })
  findAll() {
    return this.newsService.findAll();
  }

  @Query(() => ResponseAPI<News>, { name: 'newsDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.newsService.findOne(id);
  }

  @Mutation(() => ResponseAPI<News>)
  updateNews(@Args('updateNewsInput') updateNewsInput: UpdateNewsInput) {
    return this.newsService.update(updateNewsInput.id, updateNewsInput);
  }

  @Mutation(() => ResponseAPI<News>)
  removeNews(@Args('id', { type: () => Int }) id: number) {
    return this.newsService.remove(id);
  }
}
