import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { TrainingTemplateService } from './training-template.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/role.guard';

export interface TrainingTemplateItem {
  id?: number;
  name: string;
  description: string;
  hasAdditional: boolean;
  createdBy: number;
  orderNo: number;
  trainingId: number;
}

// @UseGuards(JwtAuthGuard, RolesGuard)
// @Roles('ADMIN', 'SUPER_ADMIN')
@Controller('training-templates')
export class TrainingTemplateController {
  constructor(
    private readonly trainingTemplateService: TrainingTemplateService,
  ) {}

  private readonly logger = new Logger('Training Template Controller');

  @Post()
  create(
    @Body()
    createTrainingTemplateDto: Prisma.TrainingTemplateUncheckedCreateInput,
  ) {
    return this.trainingTemplateService.create(createTrainingTemplateDto);
  }

  @Get()
  findAll() {
    return this.trainingTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingTemplateService.findByTrainingId(+id);
  }

  @Patch()
  update(@Body() updateTrainingTemplateDto: TrainingTemplateItem) {
    return this.trainingTemplateService.update(updateTrainingTemplateDto);
  }

  @Patch('/reorder-templates')
  reorderById(@Body() updatedOrder: number[]) {
    return this.trainingTemplateService.reorderByIds(updatedOrder);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingTemplateService.delete(+id);
  }
}
