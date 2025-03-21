import { UsersService } from '@/modules/user/users.service';
import { Controller, Post, UseGuards, Request, Get} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './passport/auth.local-guard';
import { Public } from '@/common/decorators/is-public/is-public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService , private usersService: UsersService) {}

  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  signIn(@Request() req) {
    return this.authService.login(req.user)
  }

  @Get("profile")
  getProfile(@Request() req){ 
      return req.user
  }

  @Public()
  @Get("mail")
  async sendMail(){ 
      this.usersService.sendMail()
      return "ok"
  }
}