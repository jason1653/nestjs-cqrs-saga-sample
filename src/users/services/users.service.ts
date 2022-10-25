import { HttpException, Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { StringUtil } from 'src/util/string.util';
import { CreateUserCommand } from '../commands/impl/create-user.command';
import { CreateUserDto } from '../dtos/create-user.dto';
import { LoginUserDto } from '../dtos/login-user.dto';
import { Users } from '../entities/users.entity';
import { GetUserSearchUserIdQuery } from '../querys/impl/get-user.search.userid.query';

@Injectable()
export class UsersService {
  constructor(
    private readonly _commandBus: CommandBus,
    private readonly _queryBus: QueryBus,
  ) {}
  public async createUser(createUserDto: CreateUserDto) {
    createUserDto.userPwd = await StringUtil.setPasswordEncode(
      createUserDto.userPwd,
    );

    const userIdCheck = await this._queryBus.execute<
      GetUserSearchUserIdQuery,
      Users
    >(new GetUserSearchUserIdQuery(createUserDto.userId));

    if (userIdCheck) {
      throw new HttpException(
        {
          errCode: 'US01',
          errMsg: '이미 가입된 회원이 존재합니다',
        },
        400,
      );
    }

    return this._commandBus.execute(new CreateUserCommand(createUserDto));
  }

  public async loginUser(loginUserDto: LoginUserDto) {
    const userData = await this._queryBus.execute<
      GetUserSearchUserIdQuery,
      Users
    >(new GetUserSearchUserIdQuery(loginUserDto.userId));

    if (!userData) {
      throw new HttpException(
        {
          errCode: 'US02',
          errMsg: '회원데이터가 존재하지 않습니다',
        },
        400,
      );
    }

    const passMatch = await StringUtil.passwordCheck(
      loginUserDto.userPwd,
      userData.userPwd,
    );

    if (!passMatch) {
      throw new HttpException(
        {
          errCode: 'US03',
          errMsg: '패스워드가 일치하지 않습니다',
        },
        400,
      );
    }

    /** JWT토큰 생성 영역 */

    return true;
  }
}
