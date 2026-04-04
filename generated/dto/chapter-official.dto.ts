
import {ChapterOfficialPosition} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ChapterOfficialDto {
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
  type: `string`,
  format: `date-time`,
})
appointedDate: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
retiredDate: Date  | null;
}
