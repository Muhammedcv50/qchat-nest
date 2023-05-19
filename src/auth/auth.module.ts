import { UserModule } from "@/user/user.module";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services";
import { Module, forwardRef } from "@nestjs/common";

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
