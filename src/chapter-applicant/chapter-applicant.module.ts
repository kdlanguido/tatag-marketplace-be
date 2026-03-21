import { Module } from '@nestjs/common';
import { ChapterApplicantService } from './chapter-applicant.service';
import { ChapterApplicantController } from './chapter-applicant.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ChapterApplicantController],
  providers: [ChapterApplicantService, PrismaService],
})
export class ChapterApplicantModule {}
