
import {Type} from 'class-transformer'
import {IsInt,IsNotEmpty,IsString} from 'class-validator'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateTrainingLinkDto {
  @IsNotEmpty()
@IsString()
link: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
@IsNotEmpty()
@IsInt()
orderNo: number;
}
