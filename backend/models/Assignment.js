const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  course_id: { type: Schema.Types.ObjectId, ref: 'Course' },
  title: { type: String, required: true },
  description: { type: String },
  due_date: { type: Date },
}, { timestamps: true });

const SubmissionSchema = new Schema({
  assignment_id: { type: Schema.Types.ObjectId, ref: 'Assignment' },
  student_id: { type: Schema.Types.ObjectId, ref: 'User' },
  submission_file_url: { type: String, required: true },
  grade: { type: String },
  submitted_at: { type: Date, default: Date.now },
  graded_at: { type: Date },
});

module.exports = {
  Assignment: mongoose.model('Assignment', AssignmentSchema),
  Submission: mongoose.model('Submission', SubmissionSchema),
};
