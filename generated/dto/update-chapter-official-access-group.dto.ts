
import {ChapterOfficialPosition,AccessGroup} from '@prisma/client'
import {Type} from 'class-transformer'
import {IsIn,IsOptional} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateChapterOfficialAccessGroupDto {
  @ApiProperty({
  enum: ChapterOfficialPosition,
})
@IsOptional()
@IsIn(["PRESIDENT","VICE_PRESIDENT","CHAPTER_ADMIN","SECRETARY","TREASURER"])
position?: ChapterOfficialPosition;
@ApiProperty({
  enum: AccessGroup,
})
@IsOptional()
@IsIn(["APPLICANT_APPROVER","TRAINING_APPROVER","PROMOTION_APPROVER"])
accessGroup?: AccessGroup;
}
