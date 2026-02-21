
import {Type} from 'class-transformer'
import {IsNotEmpty,IsRFC3339,IsString} from 'class-validator'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateChapterMemberDto {
  @IsNotEmpty()
@IsString()
batchName: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
@IsNotEmpty()
@IsRFC3339()
pruebaDate: Date;
}
