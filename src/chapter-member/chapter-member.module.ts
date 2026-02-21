import { Module } from '@nestjs/common';
import { ChapterMemberService } from './chapter-member.service';
import { ChapterMemberController } from './chapter-member.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ChapterMemberController],
  providers: [ChapterMemberService, PrismaService],
})
export class ChapterMemberModule {}
