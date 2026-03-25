
import {Type} from 'class-transformer'
import {IsBoolean,IsOptional,IsRFC3339,IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateChapterDto {
  @IsOptional()
@IsString()
name?: string;
@IsOptional()
@IsString()
region?: string;
@IsOptional()
@IsString()
logoUrl?: string;
@IsOptional()
@IsString()
logoFileKey?: string;
@IsOptional()
@IsString()
slogan?: string;
@IsOptional()
@IsString()
hqAddress?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
@IsOptional()
@IsRFC3339()
establishedDate?: Date;
@IsOptional()
@IsBoolean()
isTrainingRequired?: boolean;
}
