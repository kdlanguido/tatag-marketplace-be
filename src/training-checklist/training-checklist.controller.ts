import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingChecklistService } from './training-checklist.service';
import { Prisma } from '@prisma/client';

@Controller('training-checklist')
export class TrainingChecklistController {
  constructor(private readonly trainingChecklistService: TrainingChecklistService) { }

  @Post()
  create(@Body() createTrainingChecklistDto: Prisma.TrainingChecklistCreateInput) {
    return this.trainingChecklistService.create(createTrainingChecklistDto);
  }

  @Get()
  findAll() {
    return this.trainingChecklistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingChecklistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingChecklistDto: Prisma.TrainingChecklistUpdateInput) {
    return this.trainingChecklistService.update(+id, updateTrainingChecklistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingChecklistService.remove(+id);
  }
}
