
import {MemberLevel,ApplicationStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ChapterMemberDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
@ApiProperty({
  enum: MemberLevel,
})
memberLevel: MemberLevel ;
batchName: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
pruebaDate: Date ;
isActive: boolean ;
@ApiProperty({
  enum: ApplicationStatus,
})
applicationStatus: ApplicationStatus  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
applicationApprovedDate: Date  | null;
applicationApproverRemarks: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
applicationDate: Date  | null;
}
