
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'


export class Profile {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
userId: number ;
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
user?: User ;
}
