import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway(8080)
export class EventGateway {
  @WebSocketServer()
  server: Server

  @SubscribeMessage('connect')
  onConnect(client: any, dat: any, mets: any) {
    console.log(this.server.clients);
    
    this.server.clients.forEach(client => {
      client.send(JSON.stringify({
        type: 'notification',
        msg: `새로운 유저가 접속하였습니다. ${this.server.clients.size} 명`
      }))
    })

    return 'websocket connection made';
  }

  @SubscribeMessage('event')
  onEvent(client: any, data: any) {
    console.log(data);
    
    this.server.clients.forEach(client => {
      client.send(JSON.stringify({
        type: 'chat',
        msg: data
      }))
    })

    return 'hello world';
  }
}
