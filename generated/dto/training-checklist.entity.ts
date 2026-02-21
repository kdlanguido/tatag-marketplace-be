
import {ApiProperty} from '@nestjs/swagger'
import {Training} from './training.entity'
import {User} from './user.entity'


export class TrainingChecklist {
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
approverId: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
applicantId: number ;
status: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dateApproved: Date ;
training?: Training ;
userApprover?: User ;
userApplicant?: User ;
}
