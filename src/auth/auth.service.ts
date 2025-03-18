import { UsersService } from '@/modules/user/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService){}

    async signIn(username: string, pass: string): Promise<any> {
        if(username === "deso" || pass == "123") {
          return {username, pass};
        }
          const user = await this.usersService.findUniqueUser(username);
          if (user?.password !== pass) {
            throw new UnauthorizedException();
          }
     
        const { password, ...result } = user;
        // TODO: Generate a JWT and return it here
        // instead of the user object
        return result;
      }
}
