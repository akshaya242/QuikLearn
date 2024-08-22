const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  teacher_name: {
    type: String,
    required: true,
    maxlength: 50
  },
  image_link: {
    type: String,
    maxlength: 500
  },
  bio: {
    type: String
  }
});

module.exports = mongoose.model('Teacher', teacherSchema);
