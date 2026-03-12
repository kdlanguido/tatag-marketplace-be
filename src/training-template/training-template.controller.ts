import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TrainingTemplateService } from './training-template.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/role-guard';


// @UseGuards(JwtAuthGuard, RolesGuard)
// @Roles('ADMIN', 'SUPER_ADMIN')
@Controller('training-templates')
export class TrainingTemplateController {
  constructor(private readonly trainingTemplateService: TrainingTemplateService) { }

  @Post()
  create(@Body() createTrainingTemplateDto: Prisma.TrainingTemplateCreateInput) {
    return this.trainingTemplateService.create(createTrainingTemplateDto);
  }

  @Get()
  findAll() {
    return this.trainingTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingTemplateDto: Prisma.TrainingUpdateInput) {
    return this.trainingTemplateService.update(+id, updateTrainingTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingTemplateService.remove(+id);
  }
}
