
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'
import {Chapter} from './chapter.entity'
import {TrainingChecklist} from './training-checklist.entity'
import {TrainingLink} from './training-link.entity'
import {TrainingTemplate} from './training-template.entity'


export class Training {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
name: string ;
description: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
chapterId: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
createdBy: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
orderNo: number ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updatedAt: Date ;
trainingAuthor?: User ;
chapter?: Chapter ;
trainingChecklists?: TrainingChecklist[] ;
trainingLinks?: TrainingLink[] ;
trainingTemplates?: TrainingTemplate[] ;
chapterRequiredTraining?: Chapter[] ;
}
