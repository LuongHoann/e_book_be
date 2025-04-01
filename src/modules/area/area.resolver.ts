import { ResponseAPI } from '@/types/http.entity';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AreaService } from './area.service';
import { Area } from './entities/area.entity';
import { CreateAreaInput } from './dto/create-area.input';
import { UpdateAreaInput } from './dto/update-area.input';

@Resolver(() => Area)
export class AreaResolver {
  constructor(private readonly areaService: AreaService) {}

  @Mutation(() => ResponseAPI<Area>)
  createArea(@Args('createAreaInput') createAreaInput: CreateAreaInput) {
    return this.areaService.create(createAreaInput);
  }

  @Query(() => ResponseAPI<Area[]>, {name: "findAllAreas"})
  findAll() {
    return this.areaService.findAll();
  }

  @Mutation(() => ResponseAPI<Area>)
  updateArea(@Args('updateAreaInput') updateAreaInput: UpdateAreaInput) {
    return this.areaService.update(updateAreaInput);
  }

  @Mutation(() => ResponseAPI<Area>)
  removeArea(@Args('where') area_name : string ) {
    return this.areaService.remove(area_name);
  }
}
