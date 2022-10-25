import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Users } from 'src/users/entities/users.entity';
import { UsersStore } from 'src/users/stores/users.store';
import { CreateUserCommand } from '../impl/create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  public constructor(
    private readonly publisher: EventPublisher,
    private readonly usersStore: UsersStore,
  ) {}
  async execute(command: CreateUserCommand): Promise<any> {
    const { userId, userPwd, userEmail } = command.createUserDto;
    const userEntity = new Users();
    userEntity.userId = userId;
    userEntity.userPwd = userPwd;
    userEntity.userEmail = userEmail;
    userEntity.registDatetime = new Date();
    userEntity.updateDatetime = new Date();

    const users = await this.usersStore.register(userEntity);

    return users;
  }
}
