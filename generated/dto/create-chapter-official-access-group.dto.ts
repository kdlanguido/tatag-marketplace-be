
import {ChapterOfficialPosition,AccessGroup} from '@prisma/client'
import {Type} from 'class-transformer'
import {IsIn,IsNotEmpty} from 'class-validator'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateChapterOfficialAccessGroupDto {
  @ApiProperty({
  enum: ChapterOfficialPosition,
})
@IsNotEmpty()
@IsIn(["PRESIDENT","VICE_PRESIDENT","CHAPTER_ADMIN","SECRETARY","TREASURER"])
position: ChapterOfficialPosition;
@ApiProperty({
  enum: AccessGroup,
})
@IsNotEmpty()
@IsIn(["APPLICANT_APPROVER","TRAINING_APPROVER","PROMOTION_APPROVER"])
accessGroup: AccessGroup;
}
