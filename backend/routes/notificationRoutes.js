const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

// Create a new notification
router.post('/notifications', async (req, res) => {
  try {
    const notification = new Notification(req.body);
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all notifications
router.get('/notifications', async (req, res) => {
  try {
    const notifications = await Notification.find().populate('userId');
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a notification by ID
router.get('/notifications/:id', async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id).populate('userId');
    if (!notification) return res.status(404).json({ error: 'Notification not found' });
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a notification
router.put('/notifications/:id', async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!notification) return res.status(404).json({ error: 'Notification not found' });
    res.status(200).json(notification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a notification
router.delete('/notifications/:id', async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);
    if (!notification) return res.status(404).json({ error: 'Notification not found' });
    res.status(200).json({ message: 'Notification deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
