import { ResponseAPI } from '@/types/http.entity';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PermissionService } from './permission.service';
import { Permission } from './entities/permission.entity';
import { CreateMultiplePermissionInput } from './dto/create-multiple-permission.input';

@Resolver(() => Permission)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) { }

  @Mutation(() => Permission)
  createPermission(
    @Args('CreateMultiplePermissionInput')
    CreateMultiplePermissionInput: CreateMultiplePermissionInput,
  ) {
    return this.permissionService.create(CreateMultiplePermissionInput);
  }

  @Mutation(() => ResponseAPI<Permission>)
  replacePermission(
    @Args('createMultiplePermissionInput')
    createMultiplePermissionInput: CreateMultiplePermissionInput,
  ) {
    return this.permissionService.replace(createMultiplePermissionInput);
  }
}
