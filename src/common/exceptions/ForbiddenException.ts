import { HttpStatus } from '@nestjs/common';
import { ErrorCodes } from '../constants';
import { AppException } from './AppException';

export class ForbiddenException extends AppException {
  constructor() {
    super(ErrorCodes.FORBIDDEN, HttpStatus.FORBIDDEN);
  }
}
