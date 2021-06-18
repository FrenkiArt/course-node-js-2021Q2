import * as tasksRepo from './task.memory.repository';
import Task from '../../entity/task.model';

const getAll = (boardId: string) => tasksRepo.getAll(boardId);
const deleteAllTasksByBoardId = (boardId: string) =>
  tasksRepo.deleteAllTasksByBoardId(boardId);
const deleteUserIdFromAllHisTasks = (userId: string) =>
  tasksRepo.deleteUserIdFromAllHisTasks(userId);
const getById = (taskId: { boardId: string; taskId: string }) =>
  tasksRepo.getById(taskId);
const createTask = (newTask: Task) => tasksRepo.createTask(newTask);
const addNewTask = (newTask: Task) => tasksRepo.addNewTask(newTask);
const updateTask = (
  taskArgs: {
    title: string;
    order: number;
    description: string;
    userId: string;
    boardId: string;
    columnId: string;
  },
  taskId: string | undefined
) => tasksRepo.updateTask(taskArgs, taskId);
const deleteTask = (taskId: string | undefined) => tasksRepo.deleteTask(taskId);

export {
  getAll,
  addNewTask,
  updateTask,
  deleteTask,
  getById,
  createTask,
  deleteAllTasksByBoardId,
  deleteUserIdFromAllHisTasks,
};
