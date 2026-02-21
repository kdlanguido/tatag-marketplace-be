
import {ApiProperty} from '@nestjs/swagger'


export class TrainingChecklistDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
status: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dateApproved: Date ;
}
