const User = require('../models/User');
const Course = require('../models/Course');
const Section = require('../models/Section');
const Media = require('../models/Media'); // Assuming Media.js handles both Video and PDF
const Enrollment = require('../models/Enrollment');
const Review = require('../models/Review');
const Admin = require('../models/Admin'); // Assuming Admin.js handles AdminLog
const Assignment = require('../models/Assignment');
const Notification = require('../models/Notification'); // Assuming Notification.js handles notifications

exports.getData = async (req, res) => {
  try {
    const users = await User.find({});
    // const courses = await Course.find({});
    const sections = await Section.find({});
    // const media = await Media.find({}); // Retrieves both videos and PDFs if combined
    const enrollments = await Enrollment.find({});
    const reviews = await Review.find({});
    // const adminLogs = await Admin.find({}); // Assuming Admin.js handles AdminLog
    // const assignments = await Assignment.find({});
    const notifications = await Notification.find({}); // Assuming Notification.js handles notifications

    res.status(200).json({
      message: 'Data fetched successfully',
      users,
    //   courses,
      sections,
    //   media,
      enrollments,
      reviews,
    //   adminLogs,
    //   assignments,
      notifications
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
