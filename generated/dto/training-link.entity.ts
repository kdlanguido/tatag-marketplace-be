
import {ApiProperty} from '@nestjs/swagger'
import {Training} from './training.entity'


export class TrainingLink {
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
link: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
orderNo: number ;
training?: Training ;
}
