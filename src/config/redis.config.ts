import { RedisModuleOptions } from '@nestjs-modules/ioredis';
import { ConfigService } from '@nestjs/config';

export const redisConfig = (configService: ConfigService): RedisModuleOptions => {
    const host = configService.get<string>('REDIS_HOST');
    const port = configService.get<number>('REDIS_PORT');

    if (!host || !port) {
        throw new Error('Redis config not found!');
    }

    return {
        type: 'single',
        url: `redis://${host}:${port}`,
    };
};
