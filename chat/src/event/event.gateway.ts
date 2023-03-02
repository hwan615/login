import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(80, { namespace: 'events' })
export class EventGateway {
  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }

  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
