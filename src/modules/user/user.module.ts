import { Module } from '@nestjs/common';
import { UsersProvider } from './user.provider';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';

@Module({
  controllers: [UsersController],
  providers: [UsersProvider, UsersService],
  exports: [UsersProvider, UsersService],
})
export class UserModule {}
