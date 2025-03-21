import { AreaModule } from '@/modules/area/area.module';
import { BookModule } from '@/modules/book/book.module';
import { CommentModule } from '@/modules/comment/comment.module';
import { DiscountCodeModule } from '@/modules/discount-code/discount-code.module';
import { Favourite } from '@/modules/favourite/entities/favourite.entity';
import { LanguageModule } from '@/modules/language/language.module';
import { LicenseOwnershipModule } from '@/modules/license-ownership/license-ownership.module';
import { LicenseTypeModule } from '@/modules/license-type/license-type.module';
import { NewsModule } from '@/modules/news/news.module';
import { PermissionModule } from '@/modules/permission/permission.module';
import { ReviewModule } from '@/modules/review/review.module';
import { RolesModule } from '@/modules/roles/roles.module';
import { ShoppingCartModule } from '@/modules/shopping-cart/shopping-cart.module';
import { TransactionHistoryModule } from '@/modules/transaction-history/transaction-history.module';
import { UsersModule } from '@/modules/user/users.module';
//  graphql modules

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import GraphQLJSON from 'graphql-type-json';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  AcceptLanguageResolver,
  GraphQLWebsocketResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import * as path from 'path';
import { LanguageMiddleware } from './middleware/language/language.middleware';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { ReadingHistoryModule } from './modules/reading_history/reading_history.module';
import { DmsModule } from './aws s3/dms/dms.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/passport/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      subscriptions: {
        'graphql-ws': true,
      },
      context: (ctx) => ctx,
      path: "/graphql",
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      resolvers: { JSON: GraphQLJSON }, // use type of graphql as JSON type
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        GraphQLWebsocketResolver,
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    MailerModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService:ConfigService) => ({
        transport: {
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          tls:{
            ciphers: "SSLv3"
          },
          auth: {
            user: configService.get<string>('MAIL_USER'),
            pass: configService.get<string>('MAIL_PASSWORD'),
          },

        },
        defaults: {
          from: '"No Reply" <no-reply@localhost>',
        },
        template: {
          dir: path.join(process.cwd() + "/src/common/templates"),
          adapter: new EjsAdapter(),
          // options: {
          //   strict: true,
          // },
        },
      }),
      inject: [ConfigService]
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService:ConfigService)=> ({
        secretOrPrivateKey: configService.get<string>("JWT_SECRET"),
        signOptions: { 
          expiresIn: configService.get<string>("JWT_ACCESS_TOKEN_EXPIRES")
        }
      }),
    }),
    AreaModule,
    BookModule,
    CommentModule,
    DiscountCodeModule,
    Favourite,
    LanguageModule,
    LicenseOwnershipModule,
    LicenseTypeModule,
    NewsModule,
    PermissionModule,
    ReviewModule,
    RolesModule,
    ShoppingCartModule,
    TransactionHistoryModule,
    UsersModule,
    ReadingHistoryModule,
    AuthModule,
    DmsModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LanguageMiddleware)
  }
}
