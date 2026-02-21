import { Module } from '@nestjs/common';
import { TrainingChecklistService } from './training-checklist.service';
import { TrainingChecklistController } from './training-checklist.controller';

@Module({
  controllers: [TrainingChecklistController],
  providers: [TrainingChecklistService],
})
export class TrainingChecklistModule {}
