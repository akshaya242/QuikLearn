// In your route handler (e.g., routes/home.js)
const express = require('express');
const FAQ = require('../models/FAQ'); // Adjust the path as needed
const router = express.Router();

router.post('/faqs', async (req, res) => {
  try {
    const newFAQ = new FAQ({
      faq_question: "why",
      faq_answer: "this is why"
    });
    await newFAQ.save();
    res.status(201).send('FAQ created successfully');
  } catch (error) {
    res.status(500).send('Error creating FAQ');
  }
});

module.exports = router;
