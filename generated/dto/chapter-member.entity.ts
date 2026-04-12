
import {MemberLevel,ApplicationStatus} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'
import {Chapter} from './chapter.entity'


export class ChapterMember {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
userId: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
chapterId: number ;
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
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
applicationApproverId: number  | null;
applicationApproverRemarks: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
applicationDate: Date  | null;
user?: User ;
applicationApproverUser?: User  | null;
chapter?: Chapter ;
}
