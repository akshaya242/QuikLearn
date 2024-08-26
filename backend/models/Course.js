const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true },
  duration: { type: Number },
  language: { type: String },
  thumbnail: { type: String },
  created_by: { type: Schema.Types.ObjectId, ref: 'User' },
  sectionIds: [{ type: Schema.Types.ObjectId, ref: 'Section' }],
  studentsEnrolled: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  rating: { type: Number, default: 0 },
}, { timestamps: true });

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

module.exports = {
  Course: mongoose.model('Course', CourseSchema),
  Category: mongoose.model('Category', CategorySchema)
};
