import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
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

      const hasPending = await this.checkIfHasPendingApplication(
        Number(applicantId),
      );

      if (hasPending) {
        throw new HttpException(
          'Applicant has pending application.',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        const res = await this.prismaService.chapterApplicant.create({
          data: {
            applicantId: Number(applicantId),
            chapterId: Number(chapterId),
          },
        });
        return res;
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async checkIfHasPendingApplication(applicantId: number) {
    try {
      const res = await this.prismaService.chapterApplicant.findFirst({
        where: {
          applicantId,
          status: {
            not: 'COMPLETED',
          },
        },
      });

      return res;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return await this.prismaService.chapterApplicant.findMany();
  }
}
