const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
    required: true
  },
  question: {
    type: String,
    required: true,
    unique: true
  },
  option1: {
    type: String,
    default: "a"
  },
  option2: {
    type: String,
    default: "a"
  },
  option3: {
    type: String,
    default: "a"
  },
  option4: {
    type: String,
    default: "a"
  }
});

module.exports = mongoose.model('Quiz', quizSchema);
