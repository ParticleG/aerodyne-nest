import { WsResponse } from '@nestjs/websockets';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets/decorators';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class OicqGateway {
  @SubscribeMessage('echo')
  echoMessage(@MessageBody() data: string): WsResponse<string> {
    return { event: 'echo', data: data };
  }
}
