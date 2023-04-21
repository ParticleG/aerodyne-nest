import { Module } from '@nestjs/common';
import { OicqGateway } from './oicq.gateway';
import { OicqController } from './oicq.controller';

@Module({
  providers: [OicqGateway],
  controllers: [OicqController],
})
export class OicqModule {}
