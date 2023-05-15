import { HttpStatus } from '@nestjs/common';
import { ErrorCodes } from '../constants';
import { AppException } from './AppException';

export class NotFoundException extends AppException {
  constructor() {
    super(ErrorCodes.NOT_FOUND, HttpStatus.NOT_FOUND);
  }
}
