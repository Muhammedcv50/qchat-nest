import { HttpException } from '@nestjs/common';
import { CustomError } from '../types';

export class AppException extends HttpException {
  constructor(error: CustomError, status: number) {
    super(error, status);
  }

  getError(): CustomError {
    return super.getResponse() as CustomError;
  }
}
