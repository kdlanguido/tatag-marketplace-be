
import {ApiProperty} from '@nestjs/swagger'


export class TrainingLinkDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
link: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
orderNo: number ;
}
