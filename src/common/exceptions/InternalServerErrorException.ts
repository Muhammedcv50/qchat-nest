import { HttpStatus } from '@nestjs/common';
import { ErrorCodes } from '../constants';
import { AppException } from './AppException';

export class InternalServerErrorException extends AppException {
  constructor() {
    super(ErrorCodes.INTERNAL_SERVER_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
