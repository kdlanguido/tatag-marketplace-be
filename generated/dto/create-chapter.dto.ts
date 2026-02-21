
import {Type} from 'class-transformer'
import {IsNotEmpty,IsOptional,IsRFC3339,IsString} from 'class-validator'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateChapterDto {
  @IsNotEmpty()
@IsString()
name: string;
@IsNotEmpty()
@IsString()
region: string;
@IsOptional()
@IsString()
logoUrl?: string;
@IsOptional()
@IsString()
logoFileKey?: string;
@IsNotEmpty()
@IsString()
slogan: string;
@IsNotEmpty()
@IsString()
hqAddress: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
@IsNotEmpty()
@IsRFC3339()
establishedDate: Date;
}
