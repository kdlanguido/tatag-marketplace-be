
import {AccessGroup} from '@prisma/client'
import {Type} from 'class-transformer'
import {IsIn,IsNotEmpty} from 'class-validator'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateAccessGroupPermissionDto {
  @ApiProperty({
  enum: AccessGroup,
})
@IsNotEmpty()
@IsIn(["APPLICANT_APPROVER","TRAINING_APPROVER","PROMOTION_APPROVER"])
accessGroup: AccessGroup;
}
