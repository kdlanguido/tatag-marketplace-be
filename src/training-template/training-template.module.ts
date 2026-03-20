import { Module } from '@nestjs/common';
import { TrainingTemplateService } from './training-template.service';
import { TrainingTemplateController } from './training-template.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TrainingAdditionalItemsService } from 'src/training-additional-items/training-additional-items.service';

@Module({
  controllers: [TrainingTemplateController],
  providers: [TrainingTemplateService, PrismaService, TrainingAdditionalItemsService],
})
export class TrainingTemplateModule { }
