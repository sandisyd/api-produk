import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from './user/dto/user_create.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  signUp(@Body() userCreate: UserCreateDto) {
    return this.authService.signUp(userCreate);
  }

  @Post('login')
  login(@Body() userLogin: UserCreateDto): Promise<{ accessToken: string }> {
    return this.authService.login(userLogin);
  }

  
}
