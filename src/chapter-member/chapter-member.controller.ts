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

@Controller('chapter-member')
export class ChapterMemberController {
  constructor(private readonly chapterMemberService: ChapterMemberService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createChapterMemberDto: Prisma.ChapterMemberCreateInput) {
    return this.chapterMemberService.create(createChapterMemberDto);
  }

  @Get()
  findAll() {
    return this.chapterMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chapterMemberService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChapterMemberDto: Prisma.ChapterMemberUpdateInput,
  ) {
    return this.chapterMemberService.update(+id, updateChapterMemberDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.chapterMemberService.remove(+id);
  }
}
