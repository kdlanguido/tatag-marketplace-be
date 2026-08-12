import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import type {
  ApproveChapterMemberPayload,
  ChapterMemberApplicationInput,
} from './chapter-member.types';

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

      return { data: res, message: 'Chapter member added successfully' };
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(error);
    }
  }

  async findChapterMembersByChapterId(chapterId: number) {
    try {
      const res = await this.prisma.chapterMember.findMany({
        where: {
          chapterId,
        },
        select: {
          user: {
            select: {
              profile: {
                select: {
                  nickname: true,
                  avatarUrl: true,
                  id: true,
                },
              },
            },
          },
          chapter: {
            select: {
              name: true,
            },
          },
          pruebaDate: true,
          batchName: true,
          applicationStatus: true,
        },
      });

      if (!res) {
        this.logger.debug('Fetching the chapter members failed!');
        throw new BadRequestException('Fetching the chapter members failed!');
      }

      return { data: res, message: 'Chapter member fetched successfully' };
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(error);
    }
  }

  async findChapterMemberByUserId(userId: number) {
    try {
      const res = await this.prisma.chapterMember.findUnique({
        where: {
          userId,
        },
        select: {
          user: {
            select: {
              profile: {
                select: {
                  nickname: true,
                  avatarUrl: true,
                  id: true,
                },
              },
            },
          },
          chapter: {
            select: {
              name: true,
            },
          },
          pruebaDate: true,
          batchName: true,
          isActive: true,
          memberLevel: true,
          applicationStatus: true,
        },
      });

      if (!res) {
        this.logger.debug('Fetching the chapter member failed!');
        throw new BadRequestException('Fetching the chapter member failed!');
      }

      return { data: res, message: 'Chapter member fetched successfully' };
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(error);
    }
  }

  async findChapterMemberByProfileId(profileId: number) {
    try {
      this.logger.debug(profileId);
      const res = await this.prisma.chapterMember.findFirst({
        where: {
          user: {
            profile: {
              is: {
                id: profileId,
              },
            },
          },
        },
        select: {
          user: {
            select: {
              profile: {
                select: {
                  nickname: true,
                  avatarUrl: true,
                  id: true,
                },
              },
            },
          },
          chapter: {
            select: {
              name: true,
            },
          },
          pruebaDate: true,
          batchName: true,
          isActive: true,
          memberLevel: true,
          applicationStatus: true,
        },
      });

      if (!res) {
        this.logger.debug('Fetching the chapter member failed!');
        throw new BadRequestException('Fetching the chapter member failed!');
      }

      return { data: res, message: 'Chapter member fetched successfully' };
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(error);
    }
  }

  async findChapterMemberRequestForApproval(chapterId: number) {
    try {
      const res = await this.prisma.chapterMember.findMany({
        where: {
          chapterId,
          applicationStatus: 'FOR_APPROVAL',
        },
        select: {
          id: true,
          applicationDate: true,
          applicationStatus: true,
          userId: true,
          user: {
            select: {
              profile: {
                select: {
                  fullName: true,
                  nickname: true,
                  id: true,
                },
              },
            },
          },
          chapter: {
            select: {
              name: true,
            },
          },
        },
      });

      if (!res) {
        this.logger.debug('Fetching the chapter members failed!');
        throw new BadRequestException('Fetching the chapter members failed!');
      }

      return { data: res, message: 'Chapter member fetched successfully' };
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(error);
    }
  }

  async processChapterMemberRequestForApproval(
    payload: ApproveChapterMemberPayload,
  ) {
    try {
      const requestPayload = payload.requests;

      let errorList: {
        id: number;
        remarks: string;
      }[] = [];

      let successList: {
        id: number;
        remarks: string;
      }[] = [];

      for (const chapterMemberApplicationInput of requestPayload) {
        const res = await this.approveChapterMemberRequest(
          chapterMemberApplicationInput,
        );

        if (!res) {
          errorList.push({
            id: chapterMemberApplicationInput.id,
            remarks: 'Failed to update',
          });
        } else {
          successList.push({
            id: chapterMemberApplicationInput.id,
            remarks: 'Update successful',
          });
        }
      }

      return {
        data: {
          errorList,
          successList,
        },
        message: 'Chapter member approval executed successfully',
        success: errorList.length === 0,
      };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async approveChapterMemberRequest(payload: ChapterMemberApplicationInput) {
    const { id, applicationApproverId, batchName } = payload;

    const res = await this.prisma.chapterMember.update({
      where: {
        id,
      },
      data: {
        applicationStatus: 'APPROVED',
        memberLevel: 'MEMBER',
        applicationApprovedDate: new Date().toISOString(),
        applicationApproverId,
        batchName,
      },
    });

    if (!res) {
      return false;
    }

    return true;
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
      this.logger.error(error);
      throw new BadRequestException(error);
    }
  }
}
