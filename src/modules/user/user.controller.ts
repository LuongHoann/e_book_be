import { UsersService } from '@/modules/user/users.service';
import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
        constructor(private usersService:UsersService){}
}
