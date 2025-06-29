const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  isImportant: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);