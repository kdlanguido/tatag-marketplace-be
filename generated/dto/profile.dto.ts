
import {ApiProperty} from '@nestjs/swagger'


export class ProfileDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
fullName: string  | null;
nickname: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
birthdate: Date  | null;
mobileNo: string  | null;
address: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
weight: number  | null;
avatarUrl: string  | null;
avatarFileKey: string  | null;
ecName: string  | null;
ecMobileNo: string  | null;
ecAddress: string  | null;
}
