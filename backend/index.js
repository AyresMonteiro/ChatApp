const application = require('./src/app/app');
const mongoose = require('mongoose');
const cors = require('cors');

const app = new application();
const server = require('http').createServer(app.express);
const io = require('socket.io')(server);

mongoose.connect('mongodb://localhost/msgDB', { useNewUrlParser: true, useUnifiedTopology: true });

require('./src/app/controllers/socketActions')(io);
server.listen(3333);