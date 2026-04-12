import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ChapterMemberService } from './chapter-member.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import type { ApproveChapterMemberPayload } from './chapter-member.types';

@Controller('chapter-members')
export class ChapterMemberController {
  constructor(private readonly chapterMemberService: ChapterMemberService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createChapterMemberDto: Prisma.ChapterMemberCreateInput) {
    return this.chapterMemberService.create(createChapterMemberDto);
  }

  @Get(':id')
  findChapterMembersByChapterId(@Param('id') id: string) {
    return this.chapterMemberService.findChapterMembersByChapterId(+id);
  }

  @Get('/user-id/:id')
  findChapterMemberByUserId(@Param('id') id: string) {
    return this.chapterMemberService.findChapterMemberByUserId(+id);
  }

  @Get('/profile-id/:id')
  findChapterMemberByProfileId(@Param('id') id: string) {
    return this.chapterMemberService.findChapterMemberByProfileId(+id);
  }

  @Get('/for-approval/:id')
  findChapterMemberRequestForApproval(@Param('id') id: string) {
    return this.chapterMemberService.findChapterMemberRequestForApproval(+id);
  }

  @Patch('/approve-request')
  approveChapterMemberRequest(
    @Body() approveChapterMemberPayload: ApproveChapterMemberPayload,
  ) {
    return this.chapterMemberService.processChapterMemberRequestForApproval(
      approveChapterMemberPayload,
    );
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.chapterMemberService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateChapterMemberDto: Prisma.ChapterMemberUpdateInput,
  // ) {
  //   return this.chapterMemberService.update(+id, updateChapterMemberDto);
  // }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.chapterMemberService.remove(+id);
  }
}
