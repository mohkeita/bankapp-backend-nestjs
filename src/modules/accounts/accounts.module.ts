import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AccountsController } from './accounts.controller';
import { AccountsProvider } from './accounts.provider';
import { AccountsService } from './accounts.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AccountsController],
  providers: [AccountsProvider, AccountsService],
  exports: [AccountsService, AccountsProvider],
})
export class AccountsModule {}
