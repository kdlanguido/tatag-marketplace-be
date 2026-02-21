
import {Type} from 'class-transformer'
import {IsInt,IsOptional,IsRFC3339,IsString} from 'class-validator'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateProfileDto {
  @IsOptional()
@IsString()
fullName?: string;
@IsOptional()
@IsString()
nickname?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
@IsOptional()
@IsRFC3339()
birthdate?: Date;
@IsOptional()
@IsString()
mobileNo?: string;
@IsOptional()
@IsString()
address?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
@IsOptional()
@IsInt()
weight?: number;
@IsOptional()
@IsString()
avatarUrl?: string;
@IsOptional()
@IsString()
avatarFileKey?: string;
@IsOptional()
@IsString()
ecName?: string;
@IsOptional()
@IsString()
ecMobileNo?: string;
@IsOptional()
@IsString()
ecAddress?: string;
}
