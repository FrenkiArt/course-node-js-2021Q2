const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const getById = (taskId) => tasksRepo.getById(taskId);
const createTask = (newTask) => tasksRepo.createTask(newTask);
const addNewTask = (newTask) => tasksRepo.addNewTask(newTask);
const updateTask = (taskArgs, taskId) => tasksRepo.updateTask(taskArgs, taskId);
const deleteTask = (taskId) => tasksRepo.deleteTask(taskId);

module.exports = {
  getAll,
  addNewTask,
  updateTask,
  deleteTask,
  getById,
  createTask,
};
