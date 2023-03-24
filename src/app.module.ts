import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { userProvider } from './providers/user.provider';
import { userQueryProvider } from './providers/user_queries.provider';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, userProvider, userQueryProvider],
})
export class AppModule {}
