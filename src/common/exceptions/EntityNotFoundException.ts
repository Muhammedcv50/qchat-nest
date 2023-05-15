import { HttpStatus } from '@nestjs/common';
import { ErrorCodes } from '../constants';
import { AppException } from './AppException';

export class EntityNotFoundException extends AppException {
  constructor() {
    super(ErrorCodes.ENTITY_NOT_FOUND, HttpStatus.NOT_FOUND);
  }
}
