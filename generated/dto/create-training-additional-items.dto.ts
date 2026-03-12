
import {Type} from 'class-transformer'
import {IsInt,IsNotEmpty,IsString} from 'class-validator'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateTrainingAdditionalItemsDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
@IsNotEmpty()
@IsInt()
createdBy: number;
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
