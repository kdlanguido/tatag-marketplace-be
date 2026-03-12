import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TrainingTemplateService {
  constructor(private prismaService: PrismaService) { }

  private readonly logger = new Logger('Training Template')

  async create(createTrainingTemplateDto: Prisma.TrainingTemplateCreateInput) {
    try {
      const res = await this.prismaService.trainingTemplate.create({
        data: createTrainingTemplateDto
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
        trainingAdditionalItems: true
      }
    });
  }

  async findOne(id: number) {
    return await this.prismaService.trainingTemplate.findMany({
      select:{
        id:true,
        trainingId:true,
        name: true,
        description:true,
        hasAdditional:true,
        trainingAdditionalItems: true,
        createdBy:true,
      },
      where: {
        id
      }
    });
  }

  async update(id: number, updateTrainingTemplateDto: Prisma.TrainingTemplateUpdateInput) {
    try {
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

  remove(id: number) {
    return `This action removes a #${id} trainingTemplate`;
  }
}
