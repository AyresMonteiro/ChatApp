const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  owner: {
    type: mongoose.SchemaTypes.String,
    required: true
  },
  ownerId: {
    type: mongoose.SchemaTypes.String,
    required: true
  },
  text: {
    type: mongoose.SchemaTypes.String,
    required: true
  },
  time: {
    type: mongoose.SchemaTypes.Date,
    required: true
  }
});

module.exports = mongoose.model('Message', messageSchema);