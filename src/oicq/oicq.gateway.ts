import { UseFilters } from '@nestjs/common';
import { WsException, WsResponse } from '@nestjs/websockets';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets/decorators';

import { OicqFilter } from './oicq.filter';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  path: '/api/v1/oicq',
})
export class OicqGateway {
  @SubscribeMessage('echo')
  echoMessage(@MessageBody() data: string): WsResponse<string> {
    return { event: 'echo', data: data };
  }

  @UseFilters(new OicqFilter())
  @SubscribeMessage('exception')
  handleException(@MessageBody() data: string): void {
    throw new WsException(data);
  }
}
