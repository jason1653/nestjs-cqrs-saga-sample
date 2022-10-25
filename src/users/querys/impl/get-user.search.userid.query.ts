import { IQuery } from '@nestjs/cqrs';

export class GetUserSearchUserIdQuery implements IQuery {
  constructor(public readonly userId: string) {}
}
