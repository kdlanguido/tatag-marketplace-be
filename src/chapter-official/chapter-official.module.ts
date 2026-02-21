import { Module } from '@nestjs/common';
import { ChapterOfficialService } from './chapter-official.service';
import { ChapterOfficialController } from './chapter-official.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ChapterOfficialController],
  providers: [ChapterOfficialService, PrismaService],
})
export class ChapterOfficialModule {}
