import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity';

@Injectable()
export class UsersStore {
  constructor(
    @InjectRepository(Users)
    private readonly _usersRepository: Repository<Users>,
  ) {}

  public async register(usersEntity: Users) {
    return this.create(usersEntity);
  }

  private async create(usersEntity: Users) {
    const users = this._usersRepository.create(usersEntity);
    return this._usersRepository.save(users);
  }

  public async findOneByUserId(userId: string) {
    return this._usersRepository.findOne({
      where: {
        userId: userId,
      },
    });
  }
}
