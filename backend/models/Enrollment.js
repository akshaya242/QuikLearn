const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnrollmentSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
  studentId: { type: Schema.Types.ObjectId, ref: 'User' },
  enrollmentDate: { type: Date, default: Date.now },
  progress: { type: Number, default: 0 },
  completionStatus: { type: Boolean, default: false },
  certificateLink: { type: String },
  amountPaid: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  paymentStatus: { type: String, enum: ['paid', 'pending', 'failed'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
