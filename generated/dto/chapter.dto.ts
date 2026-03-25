
import {ApiProperty} from '@nestjs/swagger'


export class ChapterDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
name: string ;
region: string ;
logoUrl: string  | null;
logoFileKey: string  | null;
slogan: string ;
hqAddress: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
establishedDate: Date ;
isVisible: boolean ;
isTrainingRequired: boolean  | null;
}
