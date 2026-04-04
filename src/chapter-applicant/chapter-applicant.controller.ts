import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Logger,
  Param,
} from '@nestjs/common';
import { ChapterApplicantService } from './chapter-applicant.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('chapter-applicants')
export class ChapterApplicantController {
  constructor(
    private readonly chapterApplicantService: ChapterApplicantService,
  ) {}

  private readonly logger = new Logger('Chapter Applicant Logger Controller');

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body()
    createChapterApplicantDto: Prisma.ChapterApplicantUncheckedCreateInput,
  ) {
    const res = await this.chapterApplicantService.create(
      createChapterApplicantDto,
    );
    return res;
  }

  @Get()
  findAll() {
    return this.chapterApplicantService.findAll();
  }

  @Get('has-pending/:id')
  checkIfHasPendingApplication(@Param('id') id: string) {
    return this.chapterApplicantService.checkIfHasPendingApplication(+id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.chapterApplicantService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateChapterApplicantDto: Prisma.ChapterApplicantUpdateInput,
  // ) {
  //   return this.chapterApplicantService.update(+id, updateChapterApplicantDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.chapterApplicantService.remove(+id);
  // }
}
