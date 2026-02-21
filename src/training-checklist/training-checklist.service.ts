import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class TrainingChecklistService {
  create(createTrainingChecklistDto: Prisma.TrainingChecklistCreateInput) {
    return 'This action adds a new trainingChecklist';
  }

  findAll() {
    return `This action returns all trainingChecklist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainingChecklist`;
  }

  update(id: number, updateTrainingChecklistDto: Prisma.TrainingChecklistUpdateInput) {
    return `This action updates a #${id} trainingChecklist`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingChecklist`;
  }
}
