
import {Type} from 'class-transformer'
import {IsBoolean,IsNotEmpty,IsOptional,IsRFC3339,IsString} from 'class-validator'
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
@ApiProperty({
  default: false,
})
@IsOptional()
@IsBoolean()
isTrainingRequired?: boolean;
@ApiProperty({
  default: false,
})
@IsOptional()
@IsBoolean()
isApplicationRequired?: boolean;
@ApiProperty({
  default: ``,
})
@IsOptional()
@IsString()
chapterCode?: string;
}
