import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PinoTypeormLogger } from '@/common/utils';
import { typeormConfig } from './typeorm.config';

export const typeormConfigFactory = (config: ConfigService): TypeOrmModuleOptions => ({
  ...typeormConfig,
  logger: new PinoTypeormLogger(config),
  logging: ['query', 'error'],
});
