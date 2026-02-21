
import {Type} from 'class-transformer'
import {IsNotEmpty,IsRFC3339,IsString} from 'class-validator'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateTrainingChecklistDto {
  @IsNotEmpty()
@IsString()
status: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
@IsNotEmpty()
@IsRFC3339()
dateApproved: Date;
}
