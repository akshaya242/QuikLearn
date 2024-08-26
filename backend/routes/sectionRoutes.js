const express = require('express');
const router = express.Router();
const Section = require('../models/Section');

// Create a new section
router.post('/sections', async (req, res) => {
  try {
    const section = new Section(req.body);
    await section.save();
    res.status(201).json(section);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all sections
router.get('/sections', async (req, res) => {
  try {
    const sections = await Section.find().populate('courseId');
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a section by ID
router.get('/sections/:id', async (req, res) => {
  try {
    const section = await Section.findById(req.params.id).populate('courseId');
    if (!section) return res.status(404).json({ error: 'Section not found' });
    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a section
router.put('/sections/:id', async (req, res) => {
  try {
    const section = await Section.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!section) return res.status(404).json({ error: 'Section not found' });
    res.status(200).json(section);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a section
router.delete('/sections/:id', async (req, res) => {
  try {
    const section = await Section.findByIdAndDelete(req.params.id);
    if (!section) return res.status(404).json({ error: 'Section not found' });
    res.status(200).json({ message: 'Section deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
