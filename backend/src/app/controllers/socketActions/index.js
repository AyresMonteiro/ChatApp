const fs = require('fs');
const path = require('path');
const { Message } = require('../../models');

module.exports = io => {
  io.on(
    'connection',
    async socket => {
      console.log(`socket: ${socket.id}`);
      socket.emit('newConnection', {ownerId: socket.id, messages: await Message.find()});
      
      fs
      .readdirSync(__dirname)
      .filter(file => (file.indexOf('.') !== 0 && file !== 'index.js'))
      .forEach(file => require(path.resolve(__dirname, file, 'index.js'))(io, socket));
    }
  );
}