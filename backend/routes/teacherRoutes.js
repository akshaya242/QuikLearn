const express = require('express');
const { getAllTeachers, createTeacher } = require('../controllers/teacherController');
const router = express.Router();

router.get('/teachers', getAllTeachers);
router.post('/teachers', createTeacher);

module.exports = router;
