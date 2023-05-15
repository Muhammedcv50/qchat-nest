import { HttpServer, ValidationPipe, ValidationError } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ClassValidatorException } from './common/exceptions';

const bootstrap = async () => {
  const app: NestExpressApplication = await NestFactory.create(AppModule, { bufferLogs: true });
  const config: ConfigService = app.get(ConfigService);

  const port: number = config.get<number>('PORT');
  const httpAdapter = app.getHttpAdapter();
  
  const serverInstance: HttpServer = httpAdapter.getInstance() as HttpServer;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        return new ClassValidatorException(errors);
      },
    }),
  );
 
  app.setGlobalPrefix('qchat');
  app.enableCors();
  

  await app.listen(port, () => {
    const appName: string = config.get<string>('APP_NAME');
    console.log('\n',appName,"server started on port",port,"....");
  });
};

bootstrap();
