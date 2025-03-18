import { ResponseAPI } from '@/types/http.entity';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';

@Resolver(() => ResponseAPI<Role>)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Mutation(() => ResponseAPI<Role>)
  createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
    return this.rolesService.create(createRoleInput);
  }

  @Query(() => ResponseAPI<Role>, { name: 'roles' })
  findAll() {
    return this.rolesService.findAll();
  }

  @Mutation(() => ResponseAPI<Role>)
  updateRole(@Args('updateRoleInput') updateRoleInput: UpdateRoleInput) {
    return this.rolesService.update(updateRoleInput);
  }

  @Mutation(() => ResponseAPI<Role>)
  removeRole(@Args('id', { type: () => Int }) id: number) {
    return this.rolesService.remove(id);
  }
}
