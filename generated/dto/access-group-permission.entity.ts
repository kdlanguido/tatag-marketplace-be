
import {AccessGroup} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class AccessGroupPermission {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
@ApiProperty({
  enum: AccessGroup,
})
accessGroup: AccessGroup ;
}
