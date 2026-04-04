
import {ChapterOfficialPosition} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'
import {Chapter} from './chapter.entity'


export class ChapterOfficial {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
userId: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
chapterId: number ;
@ApiProperty({
  enum: ChapterOfficialPosition,
})
position: ChapterOfficialPosition ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
appointedDate: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
retiredDate: Date  | null;
user?: User ;
chapter?: Chapter ;
}
