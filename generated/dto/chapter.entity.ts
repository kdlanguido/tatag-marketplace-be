
import {ApiProperty} from '@nestjs/swagger'
import {ChapterMember} from './chapter-member.entity'
import {ChapterOfficial} from './chapter-official.entity'
import {Training} from './training.entity'
import {ChapterApplicant} from './chapter-applicant.entity'


export class Chapter {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
name: string ;
region: string ;
logoUrl: string  | null;
logoFileKey: string  | null;
slogan: string ;
hqAddress: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
establishedDate: Date ;
isVisible: boolean ;
isTrainingRequired: boolean  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
requiredTrainingId: number  | null;
chapterMembers?: ChapterMember[] ;
chapterOfficials?: ChapterOfficial[] ;
trainings?: Training[] ;
chapterApplicant?: ChapterApplicant[] ;
requiredTraining?: Training  | null;
}
