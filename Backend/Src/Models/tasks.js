const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  task_name: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
  del: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
    unique: true,
  },
  modified_by: {
    type: String,
    required: true,
  },
});

// Define the Mongoose model
const TaskModel = mongoose.model('Task', taskSchema);

module.exports = TaskModel;
