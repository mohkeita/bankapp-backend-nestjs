import { Module } from '@nestjs/common';
import { UsersProvider } from './user.provider';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { AccountsModule } from '../accounts/accounts.module';

@Module({
  controllers: [UsersController],
  imports: [AccountsModule],
  providers: [UsersProvider, UsersService],
  exports: [UsersProvider, UsersService],


})

export class UserModule {}
