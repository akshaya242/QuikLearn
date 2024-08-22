const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  faq_question: {
    type: String,
    required: true
  },
  faq_answer: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('FAQ', faqSchema);
