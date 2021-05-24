import * as tasksRepo from './task.memory.repository';

const getAll = (boardId) => tasksRepo.getAll(boardId);
const deleteAllTasksByBoardId = (boardId) =>
  tasksRepo.deleteAllTasksByBoardId(boardId);
const deleteUserIdFromAllHisTasks = (userId) =>
  tasksRepo.deleteUserIdFromAllHisTasks(userId);
const getById = (taskId) => tasksRepo.getById(taskId);
const createTask = (newTask) => tasksRepo.createTask(newTask);
const addNewTask = (newTask) => tasksRepo.addNewTask(newTask);
const updateTask = (taskArgs, taskId) => tasksRepo.updateTask(taskArgs, taskId);
const deleteTask = (taskId) => tasksRepo.deleteTask(taskId);

export default {
  getAll,
  addNewTask,
  updateTask,
  deleteTask,
  getById,
  createTask,
  deleteAllTasksByBoardId,
  deleteUserIdFromAllHisTasks,
};
