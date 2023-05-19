import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto } from '../dtos'
import { AuthService } from '../services'
import { UserDto } from '@/user/dtos/user.dto';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Post('/login')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto) {
    return this._authService.login(loginDto);
  }

  @Post('/signup')
  async signup(@Body() signupDto: UserDto) {
    return this._authService.signup(signupDto);
  }

}