
import {ApiProperty} from '@nestjs/swagger'
import {Training} from './training.entity'
import {TrainingAdditionalItems} from './training-additional-items.entity'


export class TrainingTemplate {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
trainingId: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
createdBy: number ;
name: string ;
description: string ;
hasAdditional: boolean ;
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
training?: Training ;
trainingAdditionalItems?: TrainingAdditionalItems[] ;
}
