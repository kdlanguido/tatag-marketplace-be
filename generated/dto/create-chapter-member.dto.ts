
import {ApplicationStatus} from '@prisma/client'
import {Type} from 'class-transformer'
import {IsIn,IsOptional,IsRFC3339,IsString} from 'class-validator'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateChapterMemberDto {
  @ApiProperty({
  enum: ApplicationStatus,
  default: `WAIVED`,
})
@IsOptional()
@IsIn(["WAIVED","FOR_APPROVAL","APPROVED","DECLINED"])
applicationStatus?: ApplicationStatus;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
@IsOptional()
@IsRFC3339()
applicationApprovedDate?: Date;
@IsOptional()
@IsString()
applicationApproverRemarks?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
@IsOptional()
@IsRFC3339()
applicationDate?: Date;
}
