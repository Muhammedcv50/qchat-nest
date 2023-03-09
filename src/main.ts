import { HttpServer, ValidationPipe, ValidationError } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app: NestExpressApplication = await NestFactory.create(AppModule, { bufferLogs: true });
  const config: ConfigService = app.get(ConfigService);

  const port: number = config.get<number>('PORT');
  const httpAdapter = app.getHttpAdapter();
  
  const serverInstance: HttpServer = httpAdapter.getInstance() as HttpServer;

 
  app.setGlobalPrefix('qchat');
  app.enableCors();
  

  await app.listen(port, () => {
    const appName: string = config.get<string>('APP_NAME');
    console.log('\n',appName,"server started at",port,"....");
  });
};

bootstrap();
