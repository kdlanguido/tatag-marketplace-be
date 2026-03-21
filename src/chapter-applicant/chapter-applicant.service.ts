import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { T } from 'node_modules/@upstash/redis/error-8y4qG0W2';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChapterApplicantService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger('Chapter Applicant Logger');

  async create(
    createChapterApplicantDto: Prisma.ChapterApplicantUncheckedCreateInput,
  ) {
    // to add validations
    try {
      const { applicantId, chapterId } = createChapterApplicantDto;
      const hasPending = await this.applicantHasPendingApplication(
        Number(applicantId),
      );

      this.logger.debug(hasPending);

      if (hasPending) {
        //to improve
        const res = {
          statusCode: '402',
          message: 'Applicant has pending application.',
        };

        this.logger.debug(res);

        return res;
      } else {
        const input = {
          applicantId: Number(applicantId),
          chapterId: Number(chapterId),
        };

        const res = await this.prismaService.chapterApplicant.create({
          data: input,
        });

        this.logger.debug('im here');

        return res;
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async applicantHasPendingApplication(applicantId: number) {
    try {
      const res = await this.prismaService.chapterApplicant.findMany({
        select: {
          applicantId: true,
        },
        where: {
          applicantId,
          status: 'PENDING',
        },
      });

      if (res.length > 0) {
        return true;
      }

      return false;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    return this.prismaService.chapterApplicant.findMany();
  }
}
