
import {ApiProperty} from '@nestjs/swagger'


export class ChapterOfficialDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
position: string ;
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
