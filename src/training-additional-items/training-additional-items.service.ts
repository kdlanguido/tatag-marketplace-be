import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TrainingAdditionalItem } from './training-additional-items.controller';

@Injectable()
export class TrainingAdditionalItemsService {
  constructor(private prismaService: PrismaService) {}

  private logger = new Logger('TrainingAdditionalItems');

  async create(
    createTrainingAdditionalItemDto: Prisma.TrainingAdditionalItemsCreateInput,
  ) {
    try {
      this.logger.debug(createTrainingAdditionalItemDto);

      const res = await this.prismaService.trainingAdditionalItems.create({
        data: createTrainingAdditionalItemDto,
      });

      if (!res) {
        this.logger.error(res);
        throw new InternalServerErrorException();
      }

      return res;
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException();
    }
  }

  findByTemplateId(id: number) {
    return this.prismaService.trainingAdditionalItems.findMany({
      where: {
        templateId: id,
      },
    });
  }

  async update(updateTrainingAdditionalItemDto: TrainingAdditionalItem) {
    try {
      const { id } = updateTrainingAdditionalItemDto;
      return await this.prismaService.trainingAdditionalItems.update({
        where: { id },
        data: updateTrainingAdditionalItemDto,
      });
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException();
    }
  }

  async delete(id: number) {
    try {
      return await this.prismaService.trainingAdditionalItems.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException();
    }
  }

  async deleteTemplateAdditionalItems(templateId: number) {
    const trainingAdditionalItems = await this.findByTemplateId(templateId);

    for (const trainingAdditionalItem of trainingAdditionalItems) {
      await this.delete(trainingAdditionalItem.id);
    }
  }
}
