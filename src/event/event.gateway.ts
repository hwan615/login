import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway(8080)
export class EventGateway {
  @WebSocketServer()
  server: Server

  @SubscribeMessage('event')
  onEvent(client: any, data: any) {
    console.log(data);
    
    return 'hello world';
  }
}
