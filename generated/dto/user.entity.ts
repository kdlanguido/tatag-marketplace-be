
import {Role} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Profile} from './profile.entity'
import {ChapterMember} from './chapter-member.entity'
import {ChapterOfficial} from './chapter-official.entity'
import {Training} from './training.entity'
import {TrainingChecklist} from './training-checklist.entity'
import {ChapterApplicant} from './chapter-applicant.entity'


export class User {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
@ApiProperty({
  enum: Role,
})
role: Role ;
email: string ;
password: string ;
isNew: boolean ;
isBanned: boolean ;
profile?: Profile  | null;
chapterMember?: ChapterMember  | null;
chapterOfficial?: ChapterOfficial  | null;
trainings?: Training[] ;
trainingChecklistApprover?: TrainingChecklist[] ;
trainingChecklistApplicant?: TrainingChecklist[] ;
chapterApplicants?: ChapterApplicant[] ;
chapterApplicantApprover?: ChapterApplicant[] ;
applicationApprover?: ChapterMember[] ;
}
