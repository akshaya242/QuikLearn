const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
  studentId: { type: Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, required: true },
  comment: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);
