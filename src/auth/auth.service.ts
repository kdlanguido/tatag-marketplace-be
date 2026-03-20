import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { AuthJwtPayload } from './types/jwtPayload';
import refreshConfig from 'src/config/refresh.config';
import type { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,

    @Inject(refreshConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshConfig>
  ) { }

  async validateUser(email: string, inputPass: string) {
    const user = await this.userService.findByEmail(email.toLowerCase())
    if (!user) throw new UnauthorizedException('User not found!')

    const passIsGood = await bcrypt.compare(inputPass, user.password)
    if (!passIsGood) throw new UnauthorizedException('User not found!')

    const { password, ...result } = user;
    return result;
  }

  async login(user: any) {
    
    const {
      accessToken,
      refresh_token
    } = await this.generateTokens(user)

    return {
      user,
      accessToken,
      refresh_token
    };
  }

  async generateTokens(user: any) {
    const payload: AuthJwtPayload = {
      email: user.email,
      sub: user.id,
      role: user.role
    }

    const [accessToken, refresh_token] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshTokenConfig)
    ]);

    return {
      accessToken,
      refresh_token
    }
  }

  async refreshTokens(user: any) {
    const { accessToken, refresh_token } = await this.generateTokens(user)

    return {
      accessToken,
      refresh_token
    };
  }

  async validateRefreshToken(userId: number) {
    const { id } = await this.userService.findOne(userId)
    if (!id) throw new UnauthorizedException('User not found!')
    return { id }
  }

}
