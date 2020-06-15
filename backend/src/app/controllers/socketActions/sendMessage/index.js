const { Message } = require('../../../models');

module.exports = (io, socket) => {
  socket.on('sendMessage', async data => {
    const { owner, text } = data;
    const newMsg = Message({ owner, ownerId: socket.id, text, time: new Date() });

    await newMsg.save(err => {
      if (err)
        console.log(err);
      else {
        io.sockets.emit('newMessage', newMsg);
      }
    });
  });
}