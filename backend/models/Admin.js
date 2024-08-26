const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminLogSchema = new Schema({
  admin_id: { type: Schema.Types.ObjectId, ref: 'User' },
  action: { type: String, required: true },
}, { timestamps: true });

const CourseCreationRequestSchema = new Schema({
  teacher_id: { type: Schema.Types.ObjectId, ref: 'User' },
  course_id: { type: Schema.Types.ObjectId, ref: 'Course' },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  request_date: { type: Date, default: Date.now },
  response_date: { type: Date },
  admin_id: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = {
  AdminLog: mongoose.model('AdminLog', AdminLogSchema),
  CourseCreationRequest: mongoose.model('CourseCreationRequest', CourseCreationRequestSchema)
};
