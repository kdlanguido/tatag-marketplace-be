import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingAdditionalItemsService } from './training-additional-items.service';
import { Prisma } from '@prisma/client';

@Controller('training-additional-items')
export class TrainingAdditionalItemsController {
  constructor(private readonly trainingAdditionalItemsService: TrainingAdditionalItemsService) { }

  @Post()
  create(@Body() createTrainingAdditionalItemDto: Prisma.TrainingAdditionalItemsCreateInput) {
    return this.trainingAdditionalItemsService.create(createTrainingAdditionalItemDto);
  }


  @Get(':id')
  findByTemplateId(@Param('id') id: number) {
    return this.trainingAdditionalItemsService.findByTemplateId(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingAdditionalItemDto: Prisma.TrainingAdditionalItemsUpdateInput) {
    return this.trainingAdditionalItemsService.update(+id, updateTrainingAdditionalItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingAdditionalItemsService.remove(+id);
  }
}
