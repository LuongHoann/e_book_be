import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@/modules/user/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { comparePassword } from '@/utils/helpers';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailerService: MailerService,
  ) {}


  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findUniqueUser(email);
    if (!user) return null;

    const isValidPassword = await comparePassword(pass, user.password);
    if (!isValidPassword) return null;

    const { password, ...rest } = user; // tránh leak password ra ngoài
    return rest;
  }

  async login(user: any) {
    const payload = { username: user.user_name, sub: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
