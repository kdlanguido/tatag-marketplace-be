
import {ApiProperty} from '@nestjs/swagger'


export class TrainingAdditionalItemsDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
createdBy: number ;
name: string ;
description: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
orderNo: number ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updatedAt: Date ;
}
