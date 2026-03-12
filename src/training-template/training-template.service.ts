import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TrainingAdditionalItemsService } from 'src/training-additional-items/training-additional-items.service';
import { TrainingTemplateItem } from './training-template.controller';


interface AdditionalItems {
  name: string
  description: string
  isNew: boolean
  isUpdated: boolean
}

interface TemplateInput {
  name: string
  description: string
  hasAdditional: boolean
  trainingId: number
  createdBy: number
  isNew: boolean
  isUpdated: boolean
  trainingAdditionalItems: AdditionalItems[]
}

interface SyncInput {
  create: TemplateInput[],
  update: TemplateInput[],
  delete: TemplateInput[]
}

@Injectable()
export class TrainingTemplateService {
  constructor(
    private prismaService: PrismaService,
  ) { }

  private readonly logger = new Logger('Training Template Service')

  async create(createTrainingTemplateDto: Prisma.TrainingTemplateCreateInput) {
    try {

      const res = await this.prismaService.trainingTemplate.create({
        data: createTrainingTemplateDto
      });

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

  async findAll() {
    return await this.prismaService.trainingTemplate.findMany({
      select: {
        id: true,
        trainingId: true,
        createdBy: true,
        name: true,
        description: true,
        hasAdditional: true,
        orderNo: true,
        trainingAdditionalItems: {
          select: {
            name: true,
            description: true,
            id: true,
            createdBy: true,
            orderNo: true,
            templateId: true
          }
        }
      }
    });
  }

  async findByTrainingId(trainingId: number) {
    return await this.prismaService.trainingTemplate.findMany({
      select: {
        id: true,
        trainingId: true,
        name: true,
        description: true,
        hasAdditional: true,
        trainingAdditionalItems: {
          select: {
            name: true,
            description: true,
            id: true,
            createdBy: true,
            orderNo: true,
            templateId: true
          }
        },
        createdBy: true,
      },
      where: {
        trainingId
      },
      orderBy: {
        orderNo: 'asc'
      }
    });
  }

  async update(updateTrainingTemplateDto: TrainingTemplateItem) {
    try {
      const { id } = updateTrainingTemplateDto
      const res = await this.prismaService.trainingTemplate.update({
        where: {
          id
        },
        data: updateTrainingTemplateDto
      })

      if (!res) {
        this.logger.error(res)
        throw new InternalServerErrorException()
      }
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException()
    }
  }

  async remove(id: number) {
    return `This action removes a #${id} trainingTemplate`;
  }

  async reorderByIds(ids: number[]) {
    const updates = ids.map((id, index) =>
      this.prismaService.trainingTemplate.update({
        where: { id },
        data: { orderNo: index + 1 },
      })
    );
    await this.prismaService.$transaction(updates);
  }
}
