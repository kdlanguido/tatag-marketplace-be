
import {MemberLevel} from '@prisma/client'
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
isActive: boolean ;
batchName: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
pruebaDate: Date ;
user?: User ;
chapter?: Chapter ;
}
