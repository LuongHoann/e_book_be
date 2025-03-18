import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirebaseController } from './firebase.controller';
import * as admin from 'firebase-admin';

@Module({
    imports: [ConfigModule.forRoot()] ,
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      useFactory: (configService: ConfigService) => {
        const serviceAccountPath = process.cwd() + configService.get<string>('FIREBASE_SERVICE_ACCOUNT_KEY_PATH');
        if (!serviceAccountPath) {
            throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY_PATH is not defined in the configuration');
          }
        const serviceAccount = require(serviceAccountPath) ;
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          databaseURL: configService.get<string>('FIREBASE_DATABASE_URL'),
        });
        return admin;
      },
      inject: [ConfigService],
    },
  ],
  exports: ['FIREBASE_ADMIN'],
  controllers: [FirebaseController],
})
export class FirebaseModule {}