import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChapterMemberService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger('Chapter Member');

  async create(createChapterMemberDto: Prisma.ChapterMemberCreateInput) {
    try {
      const res = await this.prisma.chapterMember.create({
        data: createChapterMemberDto,
        include: {
          chapter: true,
        },
      });

      if (!res) {
        this.logger.debug('Creating the chapter member failed!');
        throw new BadRequestException('Creating the chapter member failed!');
      }

      return { data: res, message: 'Chapter member created successfully' };
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

  findAll() {
    return `This action returns all chapterMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chapterMember`;
  }

  update(id: number, updateChapterMemberDto: Prisma.ChapterMemberUpdateInput) {
    return `This action updates a #${id} chapterMember`;
  }

  async remove(id: number) {
    try {
      this.logger.debug(id);
      const res = await this.prisma.chapterMember.delete({
        where: {
          id,
        },
      });

      if (!res) {
        this.logger.debug('Leave club failed!');
        throw new BadRequestException('Leave club failed!');
      }

      return { data: res, message: 'Leave club successful' };
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
