
import {ChapterOfficialPosition,AccessGroup} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ChapterOfficialAccessGroup {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
@ApiProperty({
  enum: ChapterOfficialPosition,
})
position: ChapterOfficialPosition ;
@ApiProperty({
  enum: AccessGroup,
})
accessGroup: AccessGroup ;
}
