
import {AccessGroup} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class AccessGroupPermissionDto {
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
