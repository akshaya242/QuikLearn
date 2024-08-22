const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  course_title: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  videolink: {
    type: String,
    default: "a"
  },
  Overview: {
    type: String,
    default: "a"
  },
  QA: {
    type: String,
    default: "a"
  },
  Notes: {
    type: String,
    default: "a"
  },
  Announcements: {
    type: String,
    default: "a"
  },
  Reviews: {
    type: String,
    default: "a"
  }
});

module.exports = mongoose.model('Section', sectionSchema);
