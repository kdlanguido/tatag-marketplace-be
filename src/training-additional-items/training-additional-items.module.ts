import { Module } from '@nestjs/common';
import { TrainingAdditionalItemsService } from './training-additional-items.service';
import { TrainingAdditionalItemsController } from './training-additional-items.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TrainingAdditionalItemsController],
  providers: [TrainingAdditionalItemsService, PrismaService],
})
export class TrainingAdditionalItemsModule { }
