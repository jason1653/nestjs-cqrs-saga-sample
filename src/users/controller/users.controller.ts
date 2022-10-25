import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { LoginUserDto } from '../dtos/login-user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Post('')
  public async createUsers(@Body() createUserDto: CreateUserDto) {
    return this._usersService.createUser(createUserDto);
  }

  @Post('login')
  public async loginUsers(@Body() loginUserDto: LoginUserDto) {
    return this._usersService.loginUser(loginUserDto);
  }
}
