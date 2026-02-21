import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ChapterOfficialService } from './chapter-official.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('chapter-officials')
export class ChapterOfficialController {
  constructor(private readonly chapterOfficialService: ChapterOfficialService) { }

  @Post()
  create(@Body() createChapterOfficialDto: Prisma.ChapterOfficialCreateInput) {
    return this.chapterOfficialService.create(createChapterOfficialDto);
  }

  @Get()
  findAll() {
    return this.chapterOfficialService.findAll();
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  findByChapterId(@Param('id') id: number) {
    return this.chapterOfficialService.findByChapterId(id)
  }


}
