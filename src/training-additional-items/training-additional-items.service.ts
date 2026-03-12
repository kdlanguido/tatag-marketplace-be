import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TrainingAdditionalItemsService {
  constructor(private prismaService: PrismaService) { }

  private logger = new Logger("TrainingAdditionalItems")

  async create(createTrainingAdditionalItemDto: Prisma.TrainingAdditionalItemsCreateInput) {
    try {
      const res = await this.prismaService.trainingAdditionalItems.create({
        data: createTrainingAdditionalItemDto
      })

      if (!res) {
        this.logger.error(res)
        throw new InternalServerErrorException()
      }

      return res
      
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException()
    }
  }

  findByTemplateId(id: number) {
    return this.prismaService.trainingAdditionalItems.findMany({
      where: {
        templateId: id
      }
    })
  }

  update(id: number, updateTrainingAdditionalItemDto: Prisma.TrainingAdditionalItemsUpdateInput) {
    return `This action updates a #${id} trainingAdditionalItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingAdditionalItem`;
  }
}
