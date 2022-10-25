import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'userId: 필수값입니다' })
  userId: string;

  @IsString({ message: 'userPwd: 필수값입니다' })
  @MinLength(8, { message: 'userPwd 최소8자리입니다' })
  @MaxLength(16, { message: 'userPwd 최대 16자리입니다' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: '대소문자 + 숫자 + 특수문자포함되어야합니다.',
  })
  userPwd: string;

  @IsEmail({ message: '이메일형식이 올바르지 않습니다' })
  userEmail: string;
}
