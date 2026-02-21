
import {Type} from 'class-transformer'
import {IsInt,IsNotEmpty,IsString} from 'class-validator'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateTrainingDto {
  @IsNotEmpty()
@IsString()
name: string;
@IsNotEmpty()
@IsString()
description: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
@IsNotEmpty()
@IsInt()
orderNo: number;
}
