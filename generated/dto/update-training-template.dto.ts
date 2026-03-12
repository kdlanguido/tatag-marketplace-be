
import {Type} from 'class-transformer'
import {IsInt,IsOptional,IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateTrainingTemplateDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
@IsOptional()
@IsInt()
createdBy?: number;
@IsOptional()
@IsString()
name?: string;
@IsOptional()
@IsString()
description?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
@IsOptional()
@IsInt()
orderNo?: number;
}
