// const { findById } = require("../models/Task");
const Task = require("../models/Task");

const findAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      messsage: error.message || "someting wrong retrieving the tasks",
    });
  }
};

const addTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Cannot empty title" });
  }
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    res.json(error.message);
  }
};

const findOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.json({ message: `Task whit id :${id} does not exist` });
    }

    res.json(task);
  } catch (error) {
    res.json({
      message: error.message || `Error retriving task whit id ${id}`,
    });
  }
};

const deleteOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.json({ message: `Task whit id  ${id} does not exist` });
    }
    res.json({ message: "Task wew deleted successfully" });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: `cannot delete task with id ${id} ` });
  }
};

const findTrueTask = async (req, res) => {
  const trueTask = await Task.find({ done: true });
  res.json(trueTask);
};

const updateTask = async (req, res) => {
  const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json(updateTask);
};
module.exports = {
  findAllTasks,
  addTask,
  findOneTask,
  deleteOneTask,
  findTrueTask,
  updateTask,
};
