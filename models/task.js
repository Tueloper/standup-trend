const mongoose = require('mongoose');

const standSchema = mongoose.Schema({

  username: {
    type: String,
    trim: true
  },

  last_24_hr: {
    type: String,
    trim: true
  },

  next_24_hr: {
    type: String,
    trim: true
  },

  blocker: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const STANDUP = mongoose.model('stand_up', standSchema);
module.exports = STANDUP;