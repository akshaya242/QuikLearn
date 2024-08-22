const express = require('express');
const { getAllStudents, createStudent } = require('../controllers/studentController');
const router = express.Router();

router.get('/students', getAllStudents);
router.post('/students', createStudent);

module.exports = router;
