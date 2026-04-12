import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import type { Response, Request as ExpressRequest } from 'express';
import { CreateUserDto } from 'generated/dto';
import { UserService } from 'src/user/user.service';
import { RefreshAuthGuard } from './guards/refresh-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refresh_token, user } = await this.authService.login(
      req.user,
    );

    return {
      user,
      accessToken,
      refresh_token,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    return { message: 'Logged out successfully' };
  }

  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  async refresh(@Request() req) {
    const { accessToken, refresh_token } = await this.authService.refreshTokens(
      req.user,
    );
    return {
      accessToken,
      refresh_token,
    };
  }

  @Post('register')
  async register(@Body() register: CreateUserDto) {
    return await this.userService.create(register);
  }
}
