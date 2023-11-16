import { Server } from 'http';
import { Server as SocketServer } from 'socket.io';

interface IJoin {
  userId: string;
}

function initialize(server: Server) {
  const io: SocketServer = require('socket.io')(server);

  io.on('connection', (socket) => {
    console.log('A user just connected');

    socket.on('join', (data: IJoin) => {
      socket.join(data.userId);
      console.log(`User joined room: ${data.userId}`);
    });
  });
}

export { initialize };
