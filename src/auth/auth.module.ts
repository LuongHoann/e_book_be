import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '@/modules/user/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './passport/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './passport/jwt.strategy';

@Module({
  imports:[UsersModule ,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        global:true,
        secretOrPrivateKey: configService.get<string>('JWT_SECRET'),
        signOptions: {
            expiresIn: configService.get<string>('JWT_ACCESS_TOKEN_EXPIRES'),
        },
      }),
      inject: [ConfigService],
    }),
    PassportModule ,  
   ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy],

})
export class AuthModule {}
