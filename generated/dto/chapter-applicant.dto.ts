
import {ApplicantStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ChapterApplicantDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
appliedDate: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dateApproved: Date  | null;
@ApiProperty({
  enum: ApplicantStatus,
})
status: ApplicantStatus ;
}
