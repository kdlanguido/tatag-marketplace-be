import { ExecutionContext, Injectable, Logger } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtCookieAuthGuard extends AuthGuard('jwt') {
    private logger = new Logger('CookieGuard')
    canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest()

        this.logger.debug(req.cookies)

        const token = req.cookies?.access_token

        this.logger.log(token)

        if (token) {
            req.headers.authorization = `Bearer ${token}`
        }

        return super.canActivate(context)
    }
}