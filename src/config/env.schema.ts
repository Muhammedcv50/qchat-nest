import { ENV } from '@/common/constants';
import * as Joi from 'joi';

export const EnvSchema = Joi.object({
  PORT: Joi.number().required(),
  APP_NAME: Joi.string().required(),
  NODE_ENV: Joi.string()
    .valid(...Object.values(ENV))
    .required(),
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_PORT: Joi.number().default(5432),
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_SCHEMA: Joi.string().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
});
