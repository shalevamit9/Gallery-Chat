import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Message } from './types';

@WebSocketGateway({ cors: true })
export class ArtsGateway {
  @WebSocketServer()
  private server: Server;

  @SubscribeMessage('messageToServer')
  handleMessage(client: Socket, { content, room, username }: Message): void {
    client.to(room).emit('messageToClient', { content, username });
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(socket: Socket, roomId: string): void {
    socket.join(roomId);
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(socket: Socket, roomId: string): void {
    socket.leave(roomId);
  }
}
