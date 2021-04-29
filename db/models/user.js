const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };