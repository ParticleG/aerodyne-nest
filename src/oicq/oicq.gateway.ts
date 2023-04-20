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
  @SubscribeMessage('message')
  echoMessage(@MessageBody() data: string): WsResponse<string> {
    console.log('data', data);
    return { event: 'message', data: data };
  }
}
