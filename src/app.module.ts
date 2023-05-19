import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfig, EnvSchema } from './config';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { MessageModule } from './message/message.module';
import { GroupModule } from './group/group.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfigFactory } from './shared/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [AppConfig],
      validationSchema: EnvSchema,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({ imports: [ConfigModule], inject: [ConfigService], useFactory: typeormConfigFactory }),
    UserModule,
    AuthModule,
    AdminModule,
    MessageModule,
    GroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
