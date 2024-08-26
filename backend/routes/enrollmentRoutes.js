const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

// Enroll a user in a course
router.post('/enrollments', async (req, res) => {
  try {
    const enrollment = new Enrollment(req.body);
    await enrollment.save();
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all enrollments
router.get('/enrollments', async (req, res) => {
  try {
    const enrollments = await Enrollment.find().populate('userId').populate('courseId');
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get an enrollment by ID
router.get('/enrollments/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id).populate('userId').populate('courseId');
    if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cancel an enrollment
router.delete('/enrollments/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
    res.status(200).json({ message: 'Enrollment canceled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
