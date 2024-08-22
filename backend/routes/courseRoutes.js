const express = require('express');
const { getAllCourses, createCourse, getCourseById } = require('../controllers/courseController');
const router = express.Router();

router.get('/courses', getAllCourses);
router.post('/courses', createCourse);
router.get('/courses/:id', getCourseById);

module.exports = router;
