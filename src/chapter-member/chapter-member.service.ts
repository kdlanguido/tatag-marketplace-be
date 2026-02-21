import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChapterMemberService {
  constructor(
    private prisma: PrismaService,
  ) { }
  private readonly logger = new Logger('Chapter Member');

  async create(createChapterMemberDto: Prisma.ChapterMemberCreateInput) {

    try {

      const res = await this.prisma.chapterMember.create({
        data: createChapterMemberDto
      })

      if (!res) {
        this.logger.debug('Creating the chapter member failed!')
      }

      return res

    } catch (error) {
      this.logger.error(error.message)
    }
    return 'This action adds a new chapterMember';
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

  remove(id: number) {
    return `This action removes a #${id} chapterMember`;
  }
}
