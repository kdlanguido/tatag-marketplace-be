
import {Type} from 'class-transformer'
import {IsOptional,IsRFC3339} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateChapterOfficialDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
})
@IsOptional()
@IsRFC3339()
retiredDate?: Date;
}
