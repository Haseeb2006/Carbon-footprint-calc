const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  path: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
  },
  quiz: {
    type: [
      {
        question: String,
        options: [String],
        correctAnswer: String,
      },
    ],
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Video', VideoSchema);