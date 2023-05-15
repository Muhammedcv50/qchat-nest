import { HttpStatus } from '@nestjs/common';
import { ErrorCodes } from '../constants';
import { CustomError } from '../types';
import { AppException } from './AppException';

export class UnauthenticatedException extends AppException {
  constructor(error?: CustomError) {
    error = error ?? ErrorCodes.UNAUTHENTICATED;
    super(error, HttpStatus.UNAUTHORIZED);
  }
}
