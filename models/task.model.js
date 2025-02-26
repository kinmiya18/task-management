const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  status: String,
  content: String,
  timeStart: {
    type: Date,
    default: null,
  },
  timeFinish: {
    type: Date,
    default: null,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

const Task = mongoose.model("Task", taskSchema, "task");
module.exports = Task;
