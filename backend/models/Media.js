const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  duration: { type: Number },
}, { timestamps: true });

const PDFSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
  title: { type: String, required: true },
  pdfUrl: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

const QuizSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
  title: { type: String, required: true },
  questions: [{ question: String, options: [String], correctAnswer: String }],
  answers: [{ studentId: { type: Schema.Types.ObjectId, ref: 'User' }, responses: [String] }],
}, { timestamps: true });

module.exports = {
  Video: mongoose.model('Video', VideoSchema),
  PDF: mongoose.model('PDF', PDFSchema),
  Quiz: mongoose.model('Quiz', QuizSchema),
};
