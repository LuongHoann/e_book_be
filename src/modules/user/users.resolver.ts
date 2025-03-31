import { ResponseAPI } from '@/types/http.entity';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Public } from '@/common/decorators/is-public/is-public.decorator';

@Resolver(() => ResponseAPI<User>)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Mutation(() => ResponseAPI<User>)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.hanldeLogin(createUserInput);
  }

  @Query(() => ResponseAPI<User>, { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => ResponseAPI<User>, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: User['id']) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => ResponseAPI<User>)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => ResponseAPI<User>)
  removeUser(@Args('id', { type: () => String }) id: User['id']) {
    return this.usersService.remove(id);
  }
}
