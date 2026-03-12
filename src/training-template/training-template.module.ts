import { Module } from '@nestjs/common';
import { TrainingTemplateService } from './training-template.service';
import { TrainingTemplateController } from './training-template.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TrainingTemplateController],
  providers: [TrainingTemplateService, PrismaService],
})
export class TrainingTemplateModule { }
