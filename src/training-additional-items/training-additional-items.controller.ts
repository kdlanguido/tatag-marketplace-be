import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { TrainingAdditionalItemsService } from './training-additional-items.service';
import { Prisma } from '@prisma/client';

export interface TrainingAdditionalItem {
  name: string;
  description: string;
  id: number;
  createdBy: number;
  orderNo: number;
  templateId: number;
}

@Controller('training-additional-items')
export class TrainingAdditionalItemsController {
  constructor(
    private readonly trainingAdditionalItemsService: TrainingAdditionalItemsService,
  ) {}

  private readonly logger = new Logger('Training Addtl Item Controller');

  @Post()
  create(
    @Body()
    createTrainingAdditionalItemDto: Prisma.TrainingAdditionalItemsCreateInput,
  ) {
    this.logger.log(createTrainingAdditionalItemDto);
    return this.trainingAdditionalItemsService.create(
      createTrainingAdditionalItemDto,
    );
  }

  @Get(':id')
  findByTemplateId(@Param('id') id: number) {
    return this.trainingAdditionalItemsService.findByTemplateId(id);
  }

  @Patch()
  update(@Body() updateTrainingAdditionalItemDto: TrainingAdditionalItem) {
    return this.trainingAdditionalItemsService.update(
      updateTrainingAdditionalItemDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingAdditionalItemsService.delete(+id);
  }
}
