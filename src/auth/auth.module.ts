import { UserModule } from '@/user/user.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services';
import { Module, forwardRef } from '@nestjs/common';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [JwtStrategy,AuthService],
})
export class AuthModule {}
