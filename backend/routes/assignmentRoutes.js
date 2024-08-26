const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// Create a new assignment
router.post('/assignments', async (req, res) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all assignments
router.get('/assignments', async (req, res) => {
  try {
    const assignments = await Assignment.find().populate('courseId');
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get an assignment by ID
router.get('/assignments/:id', async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id).populate('courseId');
    if (!assignment) return res.status(404).json({ error: 'Assignment not found' });
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an assignment
router.put('/assignments/:id', async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!assignment) return res.status(404).json({ error: 'Assignment not found' });
    res.status(200).json(assignment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an assignment
router.delete('/assignments/:id', async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndDelete(req.params.id);
    if (!assignment) return res.status(404).json({ error: 'Assignment not found' });
    res.status(200).json({ message: 'Assignment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
