import { Injectable } from '@nestjs/common';
import { LoginDto } from '../dtos';
import { UserService } from '@/user/services/user.service';
import { UserDto } from '@/user/dtos/user.dto';
import {
  UnauthenticatedException,
  ValidationException,
} from '@/common/exceptions';
import { ErrorCodes } from '@/common/constants';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(dto: LoginDto): Promise<{ message: string }> {
    const user = await this.userService.findByUsername(dto.username);
    if (!user || user.password != dto.password) {
      throw new UnauthenticatedException(ErrorCodes.INVALID_CREDENTIALS);
    }
    return { message: 'Logged in successfully' };
  }

  async signup(dto: UserDto): Promise<{ message: string }> {
    const existingUser = await this.userService.findByUsername(dto.username);
    if (existingUser) {
      throw new ValidationException(ErrorCodes.USER_NAME_ALREADY_EXISTS);
    }
    await this.userService.create(dto);
    return { message: 'Signed up successfully' };
  }
}
