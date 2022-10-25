import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Users } from 'src/users/entities/users.entity';
import { UsersStore } from 'src/users/stores/users.store';
import { GetUserSearchUserIdQuery } from '../impl/get-user.search.userid.query';

@QueryHandler(GetUserSearchUserIdQuery)
export class GetUserSearchUserIdHandler
  implements IQueryHandler<GetUserSearchUserIdQuery>
{
  constructor(private readonly _usersStore: UsersStore) {}
  async execute(query: GetUserSearchUserIdQuery): Promise<Users | null> {
    const { userId } = query;
    return this._usersStore.findOneByUserId(userId);
  }
}
