import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChapterService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(ChapterService.name);

  async create(createChapterDto: Prisma.ChapterCreateInput) {
    try {
      return await this.prisma.chapter.create({
        data: createChapterDto,
      });
    } catch (error) {
      this.logger.debug(error);
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      return await this.prisma.chapter.findMany({
        orderBy: {
          name: 'asc',
        },
        where: {
          isVisible: true,
        },
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.chapter.findUnique({
        where: {
          id,
          isVisible: true,
        },
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.message);
    }
  }

  async update(
    id: number,
    updateChapterDto: Prisma.ChapterUncheckedUpdateInput,
  ) {
    try {
      const chapter = await this.prisma.chapter.update({
        where: {
          id,
        },
        data: updateChapterDto,
      });

      this.logger.debug(chapter);
      return chapter;
    } catch (error) {
      throw error;
    }
  }
}
