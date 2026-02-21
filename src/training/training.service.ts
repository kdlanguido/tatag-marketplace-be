import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TrainingService {
  constructor(private readonly prismaService: PrismaService) { }

  private logger = new Logger('Training Service')

  async create(createTrainingDto: Prisma.TrainingCreateInput) {
    try {

      let newOrderNo = 1

      const existing = await this.prismaService.training.findMany()

      if (existing.length > 0) {
        newOrderNo = newOrderNo + existing.length
      }

      const inputData = {
        ...createTrainingDto,
        orderNo: newOrderNo
      }

      const res = await this.prismaService.training.create({
        data: inputData
      })

      if (!res) {
        throw new InternalServerErrorException()
      }

      return res
    } catch (error) {
      this.logger.error(error.message)
      throw new InternalServerErrorException(error)
    }
  }

  async findAll() {
    try {
      const res = await this.prismaService.training.findMany()

      if (!res) {
        throw new InternalServerErrorException()
      }


      return res
    } catch (error) {
      this.logger.error(error.message)
      throw new InternalServerErrorException(error)
    }
  }

  async findByChapterId(id: number) {

    const res = await this.prismaService.training.findMany({
      where: { chapterId: id }
    })

    return res
  }

  async findById(id: number) {

    const res = await this.prismaService.training.findUnique({
      where: {
        id
      },
      select: {
        name: true,
        description: true,
        orderNo: true,
        chapter: {
          select: {
            name: true
          }
        },
        trainingAuthor: {
          select: {
            profile: {
              select: {
                fullName: true
              }
            }
          }
        }
      }
    })

    return res;
  }

  async update(id: number, updateTrainingDto: Prisma.TrainingUpdateInput) {
    try {

      const res = await this.prismaService.training.update({
        where: { id },
        data: updateTrainingDto
      })

      if (!res) {
        throw new InternalServerErrorException()
      }

      return res
    } catch (error) {
      this.logger.error(error.message)
      throw new InternalServerErrorException(error)
    }
  }

}
