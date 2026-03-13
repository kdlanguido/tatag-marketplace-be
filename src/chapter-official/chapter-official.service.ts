import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChapterOfficialService {
  constructor(private prismaService: PrismaService) { }

  private readonly logger = new Logger('Chapter Official')

  async create(createChapterOfficialDto: Prisma.ChapterOfficialCreateInput) {
    try {
      return await this.prismaService.chapterOfficial.create({
        data: createChapterOfficialDto
      })
    } catch (error) {
      console.log(error)
      throw new BadRequestException(error.message)
    }
  }

  async findAll() {
    try {
      return await this.prismaService.chapterOfficial.findMany()
    } catch (error) {
      console.log(error)
      throw new BadRequestException(error.message)
    }
  }

  async findByChapterId(chapterId: number) {
    try {
      const res = await this.prismaService.chapterOfficial.findMany({
        select: {
          id: true,
          userId: true,
          chapterId: true,
          chapter: true,
          position: true,
          user: {
            select: {
              profile: {
                select: {
                  id: true,
                  fullName: true,
                  nickname: true,
                  avatarUrl: true
                }
              }
            }
          }
        },
        where: {
          chapterId
        }
      })

      if (!res) {
        this.logger.log('No chapter officials found.')
      }

      return res
    } catch (error) {
      this.logger.error(error.message)
    }
  }

}
