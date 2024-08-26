const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Create a new review
router.post('/reviews', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all reviews
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().populate('courseId').populate('userId');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a review by ID
router.get('/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('courseId').populate('userId');
    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a review
router.put('/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a review
router.delete('/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
