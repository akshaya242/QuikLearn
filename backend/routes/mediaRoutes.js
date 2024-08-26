const express = require('express');
const router = express.Router();
const { Video, PDF, Quiz } = require('../models/Media');

// Create a new video
router.post('/videos', async (req, res) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all videos
router.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find().populate('courseId');
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a video by ID
router.get('/videos/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate('courseId');
    if (!video) return res.status(404).json({ error: 'Video not found' });
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new PDF
router.post('/pdfs', async (req, res) => {
  try {
    const pdf = new PDF(req.body);
    await pdf.save();
    res.status(201).json(pdf);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all PDFs
router.get('/pdfs', async (req, res) => {
  try {
    const pdfs = await PDF.find().populate('courseId');
    res.status(200).json(pdfs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a PDF by ID
router.get('/pdfs/:id', async (req, res) => {
  try {
    const pdf = await PDF.findById(req.params.id).populate('courseId');
    if (!pdf) return res.status(404).json({ error: 'PDF not found' });
    res.status(200).json(pdf);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new quiz
router.post('/quizzes', async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all quizzes
router.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate('courseId');
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a quiz by ID
router.get('/quizzes/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate('courseId');
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
