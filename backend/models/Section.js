const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SectionSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
  title: { type: String, required: true },
  description: { type: String },
  videoIds: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
  pdfIds: [{ type: Schema.Types.ObjectId, ref: 'PDF' }],
  quizIds: [{ type: Schema.Types.ObjectId, ref: 'Quiz' }],
}, { timestamps: true });

module.exports = mongoose.model('Section', SectionSchema);
