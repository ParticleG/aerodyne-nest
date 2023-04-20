import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OicqModule } from './oicq/oicq.module';

@Module({
  imports: [OicqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
