import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersCommandHandlers } from './commands';
import { UsersController } from './controller/users.controller';
import { Users } from './entities/users.entity';
import { UsersQueryHandler } from './querys';
import { UsersService } from './services/users.service';
import { UsersStore } from './stores/users.store';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [
    UsersService,
    ...UsersCommandHandlers,
    UsersStore,
    ...UsersQueryHandler,
  ],
})
export class UsersModule {}
