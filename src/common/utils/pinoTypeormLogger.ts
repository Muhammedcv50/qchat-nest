import { Logger as TypeormLogger, QueryRunner } from 'typeorm';
import { Logger } from '@nestjs/common';
import { format } from 'sql-formatter';
import { ConfigService } from '@nestjs/config';
import { ENV } from '../constants';

export class PinoTypeormLogger implements TypeormLogger {
  private _env: string;
  private _logger: Logger;

  constructor(config: ConfigService) {
    this._logger = new Logger('Typeorm');
    this._env = config.getOrThrow<string>('NODE_ENV');
  }

  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const sql = query + (parameters && parameters.length ? ' -- PARAMETERS: ' + this.stringifyParams(parameters) : '');
    this._logger.debug(this._env === ENV.LOCAL ? format(sql, { language: 'postgresql' }) : sql);
  }

  logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const sql = query + (parameters && parameters.length ? ' -- PARAMETERS: ' + this.stringifyParams(parameters) : '');
    this._logger.error(this._env === ENV.LOCAL ? format(sql, { language: 'postgresql' }) : sql, error);
  }

  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const sql = query + (parameters && parameters.length ? ' -- PARAMETERS: ' + this.stringifyParams(parameters) : '');
    this._logger.log(this._env === ENV.LOCAL ? format(sql) : sql);
  }

  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    this._logger.debug(message);
  }

  logMigration(message: string, queryRunner?: QueryRunner) {
    this._logger.debug(message);
  }

  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
    switch (level) {
      case 'log':
      case 'info':
        this._logger.log(message);
        break;
      case 'warn':
        this._logger.warn(message);
        break;
    }
  }

  protected stringifyParams(parameters: any[]) {
    try {
      return JSON.stringify(parameters);
    } catch (error) {
      // most probably circular objects in parameters
      return parameters;
    }
  }
}
