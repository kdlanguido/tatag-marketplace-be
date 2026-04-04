
import {ApplicantStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'
import {Chapter} from './chapter.entity'


export class ChapterApplicant {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
chapterId: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
approverId: number  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
applicantId: number ;
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
userApprover?: User  | null;
userApplicant?: User ;
chapter?: Chapter ;
}
