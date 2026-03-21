
import {Type} from 'class-transformer'
import {IsOptional,IsRFC3339} from 'class-validator'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateChapterOfficialDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
})
@IsOptional()
@IsRFC3339()
retiredDate?: Date;
}
