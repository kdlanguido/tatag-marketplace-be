import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prismaService: PrismaService) { }

  private readonly logger = new Logger(ProfileService.name)

  async create(createProfileDto: Prisma.ProfileCreateInput) {
    try {
      return await this.prismaService.profile.create({
        data: createProfileDto
      })
    } catch (error) {
      this.logger.error(error.message)
      throw new BadRequestException(error.message)
    }
  }

  async findAll() {
    return await this.prismaService.profile.findMany();
  }

  async findMe(id: number) {
    try {
      const res = await this.prismaService.profile.findUnique({
        where: {
          userId: id
        }
      })

      if (!res) {
        throw new NotFoundException();
      }

      return res
    } catch (error) {
      this.logger.error(error.message, error.stack);
      throw new InternalServerErrorException('Failed to fetch profile');
    }
  }

  async findOne(id: number) {

    this.logger.log(id)
    try {
      const res = await this.prismaService.profile.findUnique({
        where: {
          id
        }
      })

      if (!res) {
        throw new NotFoundException();
      }

      return res
    } catch (error) {
      this.logger.error(error.message, error.stack);
      throw new InternalServerErrorException('Failed to fetch profile');
    }
  }

  async update(id: number, updateProfileDto: Prisma.ProfileUpdateInput) {
    try {
      return await this.prismaService.profile.update({
        where: {
          userId: id
        },
        data: updateProfileDto
      })
    } catch (error) {
      this.logger.debug(error.message)
      throw new BadRequestException()
    }
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
