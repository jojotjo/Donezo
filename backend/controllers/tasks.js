const task = require("../models/tasks");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../error/custom-error");

const readAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await task.find({});
  res.status(200).json({ tasks });
});
const createTask = asyncWrapper(async (req, res) => {
  const task = await task.create(req.body);
  res.status(201).json({ task });
});
const readTask = asyncWrapper(async (req, res) => {
  const { id: taskid } = req.params;
  const task = await task.findOne({ _id: taskid });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskid}`, 404));
  }
  res.status(200).json({ task });
});
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskid } = req.params;
  const task = await task.findOneAndUpdate({ _id: taskid }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskid}`, 404));
  }
  res.status(200).json({ task });
});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskid } = req.params;
  const task = await task.findOneAndDelete({ _id: taskid });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskid}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  readAllTasks,
  createTask,
  readTask,
  updateTask,
  deleteTask,
};
