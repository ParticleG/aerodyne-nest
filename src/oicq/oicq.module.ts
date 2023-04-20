import { Module } from '@nestjs/common';
import { OicqGateway } from './oicq.gateway';

@Module({
  providers: [OicqGateway],
})
export class OicqModule {}
