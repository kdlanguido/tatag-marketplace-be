
import {MemberLevel} from '@prisma/client'
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
isActive: boolean ;
batchName: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
pruebaDate: Date ;
}
