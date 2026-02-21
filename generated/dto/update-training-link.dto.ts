
import {Type} from 'class-transformer'
import {IsInt,IsOptional,IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateTrainingLinkDto {
  @IsOptional()
@IsString()
link?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
@IsOptional()
@IsInt()
orderNo?: number;
}
