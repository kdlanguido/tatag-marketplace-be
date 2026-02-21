import {registerAs } from "@nestjs/config"
import { JwtModuleOptions } from "@nestjs/jwt";

// export const jwtConfig = (configService: ConfigService) => {

//     const secret = configService.get<string>('JWT_SECRET');
//     const expiresIn = configService.get<string>('JWT_EXPIRES_IN');

// if (!secret || !expiresIn) {
//     throw new Error('JWTSECRET or JWTEXPIRES not found!')
// }

// return {
//     secret,
//     signOptions: {
//         expiresIn: expiresIn as any
//     }
// }
// }

export default registerAs('jwt', (): JwtModuleOptions => ({
    secret: process.env.JWT_SECRET! as string,
    signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN! as any
    }
}))