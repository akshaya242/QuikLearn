const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  category: {
    type: String,
    maxlength: 100
  },
  description: {
    type: String,
    default: 'Enter description here...'
  },
  link: {
    type: String,
    maxlength: 300
  },
  image: {
    type: String,
    maxlength: 500
  }
});

module.exports = mongoose.model('Course', courseSchema);
