const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true },
  read_status: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema);
