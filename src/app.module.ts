import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChapterModule } from './chapter/chapter.module';
import { ChapterOfficialModule } from './chapter-official/chapter-official.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisConfig } from './config/redis.config';
import { AppService } from './app.service';
import { RedisModule } from '@nestjs-modules/ioredis';
import { ChapterMemberModule } from './chapter-member/chapter-member.module';
import { TrainingModule } from './training/training.module';
import { TrainingChecklistModule } from './training-checklist/training-checklist.module';
import { TrainingTemplateModule } from './training-template/training-template.module';
import { TrainingAdditionalItemsModule } from './training-additional-items/training-additional-items.module';
import Redis from 'ioredis';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    ChapterModule,
    ChapterOfficialModule,
    ProfileModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    RedisModule.forRootAsync({
      inject: [ConfigService],
      useFactory: redisConfig,
    }),
    ChapterMemberModule,
    TrainingModule,
    TrainingChecklistModule,
    TrainingTemplateModule,
    TrainingAdditionalItemsModule,
  ],
  providers: [AppService, Redis]
})
export class AppModule { }
